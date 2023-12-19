import Image from "next/image";
import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container flex flex-col pt-10 gap-12">
        <section className="scheme-week  text-center ">
          <h1 className="font-bold uppercase text">scheme for the week</h1>
          <div className="border-2 border-primary rounded-lg overflow-hidden ">
            <table className="w-full table-auto  ">
              <tbody className="divide-y divide-primary capitalize">
                <tr className=" divide-x divide-primary ">
                  <td rowSpan="2" className="p-2">
                    sunday
                  </td>
                  <td className="p-2 ">1st service</td>
                  <td className="p-2">7:00am - 9:00am</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="border-l border-primary p-2 ">2nd service</td>
                  <td className="p-2">9:00am - 11:00am</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="p-2">tuesday</td>
                  <td className="p-2">bible study</td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="p-2">thursday</td>
                  <td className="p-2">bible study</td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td rowSpan="3" className="p-2">
                    saturday
                  </td>
                  <td className="p-2">
                    prayer warriors and evangelical metting
                  </td>
                  <td className="p-2">6:00pm</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="border-l border-primary p-2 ">
                    youth fellowship
                  </td>
                  <td className="p-2">9:00am - 11:00am</td>
                </tr>
                <tr className=" divide-x divide-primary">
                  <td className="border-l border-primary p-2 ">
                    choir practice
                  </td>
                  <td className="p-2">9:00am - 11:00am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="scheme-year  text-center ">
          <h1 className="font-bold uppercase text">scheme for the year</h1>
          <div className="border-2 border-primary rounded-lg overflow-hidden ">
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
          </div>
        </section>
        <SummaryCard cardId={"sunday service"} />
        <SummaryCard cardId={"bible study"} />
      </div>
    </>
  );
}
{
  /* <table>
          <tr>
            <td rowspan="2">Hillary</td>
            <td>Advanced Web</td>
            <td>75</td>
          </tr>
          <tr>
            <td>Operating Syatem</td>
            <td>60</td>
          </tr>
          <tr>
            <td rowspan="2">Lary</td>
            <td>Advanced Web</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Operating Syatem</td>
            <td>75</td>
          </tr>
          <tr>
            <td colspan="3">Total Average: 72.5</td>
          </tr>
        </table> */
}
