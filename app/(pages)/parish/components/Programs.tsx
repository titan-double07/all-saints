import ImageComponent from "@/app/lib/components/imageComponent";
import React from "react";

export default function Programs() {
  return (
    <div className="flex items-center w-fit gap-8">
      <div className="flex flex-col border-2 border-primary h-[300px] w-[220px] rounded-lg">
        <div className="w-full h-1/2 relative">
          <ImageComponent
            src={"/images/3838191.jpg"}
            className={` rounded-t-md  bg-top`}
          />
        </div>
        <div className="p-2 h-1/2 w-full">
          <p className="font-semibold">progam title</p>
          <p className="font-semibold text-sm text-dark/70">program time</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum?
          </p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary h-[300px] w-[220px] rounded-lg">
        <div className="w-full h-1/2 relative">
          <ImageComponent
            src={"/images/3838191.jpg"}
            className={` rounded-t-md  bg-top`}
          />
        </div>
        <div className="p-2 h-1/2 w-full">
          <p className="font-semibold">progam title</p>
          <p className="font-semibold text-sm text-dark/70">program time</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum?
          </p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary h-[300px] w-[220px] rounded-lg">
        <div className="w-full h-1/2 relative">
          <ImageComponent
            src={"/images/3838191.jpg"}
            className={` rounded-t-md  bg-top`}
          />
        </div>
        <div className="p-2 h-1/2 w-full">
          <p className="font-semibold">progam title</p>
          <p className="font-semibold text-sm text-dark/70">program time</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum?
          </p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary h-[300px] w-[220px] rounded-lg">
        <div className="w-full h-1/2 relative">
          <ImageComponent
            src={"/images/3838191.jpg"}
            className={` rounded-t-md  bg-top`}
          />
        </div>
        <div className="p-2 h-1/2 w-full">
          <p className="font-semibold">progam title</p>
          <p className="font-semibold text-sm text-dark/70">program time</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum?
          </p>
        </div>
      </div>
    </div>
  );
}
