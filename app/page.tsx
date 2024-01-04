import Image from "next/image";
import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";
import Scheme from "./components/Scheme";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container flex flex-col pt-10 gap-12">
        <section className="scheme-week section text-center ">
          <h1 className="font-bold uppercase text">scheme for the week</h1>
          <Scheme />
        </section>
        <section className="scheme-year section  text-center ">
          <h1 className="font-bold uppercase text">scheme for the year</h1>
          <Scheme />
        </section>
        <section className="section">
          <h1>sunday service</h1>
        <SummaryCard cardId={"sunday service"} />
        </section>
        <section className="section">
          <h1>bible study</h1>
        <SummaryCard cardId={"bible study"} />
        </section>
      </div>
    </>
  );
}

 {
   /* <div className="border-2 border-primary rounded-lg overflow-hidden ">
            <table className="w-full table-auto  ">
              <tbody className="divide-y divide-primary capitalize">
                <tr className=" divide-x divide-primary ">
                  <td className="p-2">every first sunday</td>
                  <td className="p-2 ">prophetic declaration sunday</td>
                  <td className="p-2">7:00am - 9:00am</td>
                </tr>

                <tr className=" divide-x divide-primary">
                  <td rowSpan={2} className="p-2">
                    every first day of the month
                  </td>
                  <td className="p-2">bible study</td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className=" border-l border-primary p-2">bible study</td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="p-2">every first day of the month</td>
                  <td className="p-2">
                    prayer warriors and evangelical metting
                  </td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="p-2">every first day of the month</td>
                  <td className="p-2">
                    prayer warriors and evangelical metting
                  </td>
                  <td className="p-2">6:00pm</td>
                </tr>
              </tbody>
            </table>
          </div> */
 }