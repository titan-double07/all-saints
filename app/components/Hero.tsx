import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero h-80  bg-primary relative overflow-hidden flex container border-b-2 border-b-primary ">
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary to-secondary opacity-80 z-10 "></div>
      <Image
        src={"/images/Welcome-home-1536x800.jpg"}
        alt="hero image"
        fill
        className={"h-full w-full object-cover z-0 "}
      />
      <div className="hero-text z-10 relative flex flex-col items-center justify-center w-full text-primary text-xl font-bold ">
        <p className="text-secondary ">luke 6:38</p>
        <h1 className="text-7xl font-bold tracking-wide ">GIVE</h1>
        <div className="flex flex-col justify-center text-center">
          <p>and you will receive</p>
          <p className="text-4xl font-semibold">RECIEVE</p>
        </div>
        <Link
                  href={"/give"}
                  
          className="py-2 px-10 rounded-lg
              bg-primary hover:bg-secondary hover:text-primary text-secondary text-center text-2xl font-semibold mt-3 shadow-lg shadow-primary/50 active:bg-primary/70 active:text-secondary hover:border-2 hover:border-primary ">
          GIVE
        </Link>
      </div>
    </div>
  );
}
