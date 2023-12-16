import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container text-center">
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
              <tr className="odd:bg-primary odd:text-secondary odd:divide-secondary divide-x divide-primary">
                <td className="border-l border-primary p-2 ">2nd service</td>
                <td className="p-2">9:00am - 11:00am</td>
              </tr>
              <tr className="odd:bg-primary odd:text-secondary odd:divide-secondary divide-x divide-primary">
                <td className="p-2">monday</td>
                <td className="p-2">bible study</td>
                <td className="p-2">6:00pm</td>
              </tr>
              <tr className="odd:bg-primary odd:text-secondary odd:divide-secondary divide-x divide-primary">
                <td className="p-2">monday</td>
                <td className="p-2">bible study</td>
                <td className="p-2">6:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <table>
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
        </table> */}
      </section>
    </>
  );
}
