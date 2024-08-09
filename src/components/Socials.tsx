import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex w-full select-none flex-row justify-end space-x-4 py-3 invert filter">
      <Link href={"https://github.com/johnnymadigan"}>
        <Image
          src={"/images/github.png"}
          alt="github"
          height={24}
          width={24}
          className="duration-200 hover:scale-125"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/johnnymadigan"}>
        <Image
          src={"/images/linkedin.png"}
          alt="linkedin"
          height={24}
          width={24}
          className="duration-200 hover:scale-125"
        />
      </Link>
      <Link href={"mailto:johnny.madigan@icloud.com"}>
        <Image src={"/images/email.png"} alt="email" height={24} width={24} className="duration-200 hover:scale-125" />
      </Link>
    </div>
  );
};

export default Socials;
