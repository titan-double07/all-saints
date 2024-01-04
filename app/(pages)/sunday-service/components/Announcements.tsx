import React from "react";

export default function Announcements() {
  return (
    <section className="section">
      <h1 >announcements</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <p className="border-l-2 border-primary pl-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            dignissimos quisquam iste repudiandae sunt officia at autem, velit
            commodi, iure natus!
          </p>
        </div>
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <p className="border-l-2 border-primary pl-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            dignissimos quisquam iste repudiandae sunt officia at autem, velit
            commodi, iure natus!
          </p>
        </div>
      </div>
    </section>
  );
}
