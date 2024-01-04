import React from 'react'

export default function SchemeTable() {
  return (
    <div className="border-2 border-primary rounded-lg overflow-hidden ">
      <table className="w-full table-auto  ">
        <tbody className="divide-y divide-primary capitalize">
          <tr className=" divide-x divide-primary ">
            <td rowSpan={2} className="p-2">
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
            <td rowSpan={2} className="p-2">
              saturday
            </td>
            <td className="p-2">prayer warriors and evangelical metting</td>
            <td className="p-2">6:00pm</td>
          </tr>
          <tr className=" divide-x divide-primary">
            <td className="border-l border-primary p-2 ">youth fellowship</td>
            <td className="p-2">9:00am - 11:00am</td>
          </tr>
          <tr className=" divide-x divide-primary">
            <td className="border-l border-primary p-2 ">choir practice</td>
            <td className="p-2">9:00am - 11:00am</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
