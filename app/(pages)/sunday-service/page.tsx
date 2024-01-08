import { orderOfServiceData } from "@/app/lib/data";
import React from "react";
import OrderOfService from "./components/OrderOfService";
import Announcements from "./components/Announcements";
import SummaryCard from "@/app/components/SummaryCard";

export default function page() {
  const { title, theme, time, type, preacher, intercession, order } =
    orderOfServiceData;
  //   console.log(order)
  return (
    <div>
      <div className="container  flex flex-col gap-8 items-center justify-center ">
        <section className="section">
          <OrderOfService />
        </section>
        <section className="section">
          <h1>announcements</h1>
          <Announcements />
        </section>

        <section className="section">
          <h1>next sunday summary</h1>
          <SummaryCard cardId={"sunday service"} />
        </section>
      </div>
    </div>
  );
}
//ask reverend for update
