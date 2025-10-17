import Link from "next/link";

export const NavLink = ({
  href,
  title,
  closeMenu,
}: {
  href: string;
  title: string;
  closeMenu: () => void;
}) => {
  function handleClick() {
    closeMenu();
  }

  return (
    <Link href={href} className="w-full" onClick={handleClick}>
      <div className="w-full border-collapse cursor-pointer px-1 py-6 text-center font-sans text-[1.1rem] font-semibold uppercase tracking-[0.1rem] text-amber-950 no-underline hover:text-white hover:text-opacity-100">
        {title}
      </div>
    </Link>
  );
};
