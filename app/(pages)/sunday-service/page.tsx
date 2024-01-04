import { orderOfServiceData } from "@/app/data";
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
      <div className="container py-10 flex flex-col gap-10 items-center justify-center ">
        <OrderOfService />
        <Announcements />
        <section className="section">
          <h1>next sunday summary</h1>
          <SummaryCard cardId={"sunday service"} />
        </section>
      </div>
    </div>
  );
}
//ask reverend for update
