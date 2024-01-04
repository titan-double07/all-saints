"use client";
import Logo from "../lib/Logo";
import { FaBars } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsNavOpen } from "../redux/features/appSlice";
export default function NavBar() {
  const { isNavOpen } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
  return (
    <header className="border-b-2 border-secondary/60 flex flex-col bg-primary text-secondary">
      <div className="flex justify-between items-center border-b-2 border-secondary/60 container py-2 ">
        <div className="logo flex items-end  gap-2 ">
          <Logo className={`w-7`} priority={true} />
        </div>
        <p className=" font-black text-center uppercase text-sm ">{`All Saint's Anglican Church`}</p>
        <button
          onClick={() => dispatch(setIsNavOpen(true))}
          className={`text-2xl text-secondary border-2 rounded-lg p-1 border-secondary transition ease-in-out delay-500 duration-300 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          } `}>
          <FaBars />
        </button>
      </div>
      <div className="flex items-center justify-between container text-sm py-1">
        <p>No 1, Akin Atoloye Str Ebute, Ikorodu</p>
        <p>3 days left</p>
      </div>
      <SideBar />
    </header>
  );
}
