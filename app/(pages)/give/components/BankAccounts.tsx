import React from "react";
import { bankAccounts } from "@/app/lib/data";
import ImageComponent from "@/app/lib/components/imageComponent";
export default function BankAccounts() {
  return (
    <ul className="flex flex-col items-center justify-center gap-5">
      {bankAccounts.map((account, index) => {
        const { imgUrl, bankName, AccNo, AccName, type, purpose } = account;
        return (
          <li
            key={index}
            className=" flex w-full max-w-md items-center gap-3 border border-primary rounded-lg p-3 text-start  bg-secondary/10 text-lg shadow-sm shadow-primary font-semibold  ">
            <div className="bank-logo w-2/6 flex flex-col items-center border-r-2 pr-3 border-primary/50">
              <div className="relative w-full h-20 rounded-full ">
                <ImageComponent
                  src={imgUrl}
                  alt={`${bankName} logo`}
                  className="object-contain"
                />
              </div>
              <p className="text-sm capitalize whitespace-nowrap">{bankName}</p>
            </div>
            <div className="flex flex-col w-4/5 items-start justify-between  gap-3">
              <div className="flex items-center justify-between w-full">
                <p className=" tracking-wider fon">{AccNo}</p>
                <p>{type}</p>
              </div>

              <p>{`${AccName} ${purpose ? ` (${purpose})` : ""}`}</p>
              <p></p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
