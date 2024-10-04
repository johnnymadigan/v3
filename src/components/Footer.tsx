import React from "react";

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 z-10 flex w-full select-none items-center justify-between px-4 py-2 font-monument font-extrabold text-stone-700">
      <p className="flex-1"></p>
      <p className="flex-1 text-center text-[0.75rem]">&copy; {thisYear} johnnymadigan</p>
      <p className="flex-1 text-end text-[0.5rem]">Build #{process.env.NEXT_PUBLIC_BUILD_NUMBER || "n/a"}</p>
    </footer>
  );
};

export default Footer;
