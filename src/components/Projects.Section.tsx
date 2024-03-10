import { useStartTextAnimation } from "~/hooks/useStartTextAnimation";
import { PROJECTS_SOURCE } from "~/constants/defaults";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "~/types/project.type";
import { useIsInView } from "~/hooks/useIsInView";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";

type ProjectsProps = {
  changeLaptopScreenCallback: (videoSource: string | null) => void;
};

const Projects: React.FC<ProjectsProps> = ({ changeLaptopScreenCallback }) => {
  const [data, setData] = useState<ProjectType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(PROJECTS_SOURCE)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid h-screen w-screen items-center">
      <div
        className={`flex flex-col items-center justify-center justify-items-center space-y-1 transition-all duration-300 ease-in-out sm:items-start sm:px-[5vw]
          ${isDrawerOpen ? "pointer-events-none opacity-5" : ""}
        `}
      >
        {data.length > 0 &&
          data.map((p) => (
            <ProjectDrawer
              key={p.name}
              project={p}
              changeLaptopScreenCallback={changeLaptopScreenCallback}
              changeIsDrawerOpenCallback={setIsDrawerOpen}
            />
          ))}
      </div>
    </div>
  );
};

type ProjectDrawerProps = {
  project: ProjectType;
  changeLaptopScreenCallback: (videoSource: string | null) => void;
  changeIsDrawerOpenCallback: (isOpen: boolean) => void;
};

// ISSUE: R3F's custom render tree somehow prevents 'useIsInView' (intersection observer hook) from triggering ∴ component never intersects
// SOLUTION: Extract component that relies on 'useInView' hook
const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  changeLaptopScreenCallback,
  changeIsDrawerOpenCallback,
}) => {
  const { currentWord, startAnimation } = useStartTextAnimation(
    project.name,
    0.33
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isInView = useIsInView(triggerRef);

  useEffect(() => {
    changeIsDrawerOpenCallback(isDrawerOpen);

    if (isDrawerOpen || isHovered) {
      changeLaptopScreenCallback(project.videoSource);
    } else {
      changeLaptopScreenCallback(null);
    }
  }, [
    isDrawerOpen,
    isHovered,
    project,
    changeLaptopScreenCallback,
    startAnimation,
  ]);

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView, startAnimation]);

  return (
    <Drawer onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}>
      <DrawerTrigger
        ref={triggerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-white transition-all duration-100 ease-in-out hover:scale-y-110 hover:text-black
          ${isInView ? "animate-fadeIn" : "animate-fadeOut"}
        `}
      >
        <h1 className="whitespace-nowrap rounded-sm bg-black px-[1vw] font-geistmono text-[7vw] leading-tight tracking-tight hover:bg-white sm:text-[6vw]">
          {currentWord}
        </h1>
      </DrawerTrigger>
      <DrawerContent className="z-50 px-2 text-black">
        <DrawerHeader>
          <DrawerTitle className="font-geistmono text-2xl">
            {project.name}
          </DrawerTitle>
          <DrawerDescription className="py-5 font-geistmono">
            {project.desc}
            <span className="flex justify-center pt-5 sm:justify-start">
              <Link href={project.link} target="_blank">
                <Image
                  src={"/images/link.png"}
                  alt="link"
                  height={32}
                  width={32}
                  className="duration-200 hover:scale-x-110"
                />
              </Link>
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Projects;
