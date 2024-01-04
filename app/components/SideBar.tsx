"use client";
import Link from "next/link";
import { navLinks } from "../lib/data";
import { FaX } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setIsNavOpen } from "../redux/features/appSlice";

export default function SideBar() {
  const pathname = usePathname();
  const { isNavOpen } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={` fixed top-0 right-0  w-56 h-full z-20 bg-primary text-secondary border-l-2 border-secondary transition ease-in-out delay-150 duration-500  ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      } `}>
      <div className="flex w-full justify-end items-center container pt-2">
        <button
          onClick={() => dispatch(setIsNavOpen(false))}
          className={`text-2xl text-secondary border-2 rounded-lg p-1 border-secondary text-right transition ease-in-out delay-500 duration-300 ${
            isNavOpen ? "opacity-100" : "opacity-0"
          } `}>
          <FaX />
        </button>
      </div>
      <ul className=" text-xl flex flex-col mt-11   ">
        {navLinks.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className={"first:border-t-2 first:border-secondary"}>
              <Link
                key={id}
                href={url}
                onClick={() => dispatch(setIsNavOpen(false))}
                className={`flex items-center gap-3 pl-4  py-3 capitalize border-b-2 border-secondary hover:bg-secondary hover:text-primary active:bg-opacity-50 active:text-secondary ${
                  pathname === url ? "bg-secondary text-primary" : ""
                }`}>
                <i className="text-2xl">{icon}</i>
                <p className="text-xl">{text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
