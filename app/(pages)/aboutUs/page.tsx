import ImageComponent from "@/app/lib/components/imageComponent";
import React from "react";
import Officials from "./components/Officials";

export default function page() {
  return (
    <div className="container flex flex-col gap-8 justify-center items-center">
      <section className="section  ">
        <h1 className="text-center">about us</h1>
        <div className="content ">
          <div className="relative w-[100px] h-[100px] float-left">
            <ImageComponent
              src="/images/logo.png"
              alt="logo"
              className="object-contain "
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati, voluptates dicta et libero nam ipsa impedit voluptatibus
            iure aperiam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis obcaecati, voluptates dicta et libero nam ipsa
            impedit voluptatibus iure aperiam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis obcaecati, voluptates dicta
            et libero nam ipsa impedit voluptatibus iure aperiam!
          </p>
        </div>
      </section>
      <section className="section w-full">
        <h1>a few of oure Officials</h1>
        <Officials />
      </section>
    </div>
  );
}
