export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="font-syne pointer-events-none fixed bottom-0 left-0 z-50 flex w-full items-center justify-between px-4 py-2 font-extrabold text-stone-700 select-none">
      <p className="flex-1"></p>
      <p className="flex-1 text-center text-[0.75rem]">&copy; {thisYear} Johnny Madigan</p>
      <div className="flex flex-1 flex-col text-end">
        <p className="text-[0.5rem]">{import.meta.env.VITE_ENVIRONMENT || "Environment: n/a"}</p>
        <p className="text-[0.5rem]">build {import.meta.env.VITE_BUILD_NUMBER || "n/a"}</p>
      </div>
    </footer>
  );
}
