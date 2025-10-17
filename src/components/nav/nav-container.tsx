/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";
import { usePathname } from "next/navigation";
import BurgerMenuIcon from "../icons/burgermenu-icon";

const routes = {
  welkom: "/",
  boeken: "/boeken",
  cursus: "/cursus",
  robin: "/robin",
  lexicon: "/lexicon",
  contact: "/contact",
};

const NavComponents = () => {
  const {
    mobileMenuRef,
    mobileMenuHandlerRef,
    isMobileMenuVisible,
    setMobileMenuVisible,
  } = useNavContext();

  const path = usePathname();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  const hideTopMenu = path === "/";
  const hideNavBar = path === "/waardenlijst";

  return (
    <header>
      <nav
        ref={mobileMenuRef}
        className={`fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-r-2 border-[#545c68] border-opacity-10 bg-orange-100 text-left lg:bg-opacity-50 ${
          isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
        } min-h-full w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
      >
        <div className="flex h-full w-full flex-col justify-center">
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.welkom}
            title={"Welkom"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.boeken}
            title={"Boeken"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.cursus}
            title={"Cursus"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.robin}
            title={"Robin"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.lexicon}
            title={"Lexicon"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-t border-dotted border-amber-950" />{" "}
          <NavLink
            href={routes.contact}
            title={"Contact"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <span className="border-b border-dotted border-amber-950" />
        </div>
      </nav>
      <div
        className={`fixed z-[2] w-full bg-transparent transition-transform duration-500 ease-in-out lg:bg-white lg:bg-opacity-80 ${hideNavBar ? "-translate-y-20" : "translate-y-0"}`}
      >
        <div
          className={`relative flex h-[80px] flex-wrap items-center justify-center px-4 py-1`}
        >
          <div ref={mobileMenuHandlerRef} className="mr-auto lg:hidden">
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
              tabIndex={1}
            >
              <BurgerMenuIcon
                className={`${isMobileMenuVisible ? "stroke-black" : "stroke-white"}`}
                height={45}
                width={45}
              />{" "}
            </button>
          </div>
          <div
            className={`${hideTopMenu ? "-translate-y-20" : "translate-y-0"} absolute flex flex-wrap items-center justify-center transition-transform duration-1000 ease-in-out`}
          ></div>
          <div className="hidden flex-row items-center gap-4 lg:flex">
            {" "}
            <NavLink
              href={routes.welkom}
              title={"Welkom"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
            <NavLink
              href={routes.boeken}
              title={"Boeken"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
            <NavLink
              href={routes.cursus}
              title={"Cursus"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
            <NavLink
              href={routes.robin}
              title={"Robin"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
            <NavLink
              href={routes.lexicon}
              title={"Lexicon"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
            <NavLink
              href={routes.contact}
              title={"Contact"}
              closeMenu={() => setMobileMenuVisible(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavComponents;
