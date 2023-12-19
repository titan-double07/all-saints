"use client";
import { useEffect } from "react";
import ImageComponent from "../lib/imageComponent";
import { setReadMore } from "../redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function SummaryCard({cardId}) {
  const { cards } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
const readMore = cards[cardId].readMore;
  useEffect(() => {
    console.log(readMore);
  }, [readMore]);
  return (
    <div className="summary-card border-2 border-primary rounded-lg flex flex-col justify-center relative ">
      <div className="flex items-center gap-5  absolute top-0 right-0 bg-primary text-light rounded-bl p-1 font-semibold">
        <p className="date  bg-primary text-light">05/11/2022</p>
        <p className="time  bg-primary text-light">8:00 AM</p>
      </div>
      <ImageComponent
        src={"/images/3838191.jpg"}
        className={`w-full h-[190px] object-cover rounded-t-lg `}
      />
      <div className="card-body flex flex-col bg-primary text-light p-2 gap-1">
        <h2>prophetic sunday and anointing service</h2>
        <div className="flex items-center gap-2 text-lg capitalize">
          <h3>theme:</h3>
          <p>power in the world of god</p>
        </div>
        <div className="flex items-center gap-2 text-lg capitalize">
          <h3>type:</h3>
          <p>combined service</p>
        </div>
        <div className="readings flex flex-col relative">
          {/* <div className="flex items-center justify-between">
          </div> */}
          <div className="flex items-center gap-2 text-lg capitalize">
            <p className="font-bold text-xl">O.T Reading:</p>
            <p>Isaiah 11:1-11</p>
          </div>
          <button
            onClick={() => dispatch(setReadMore({ cardId, value: !readMore }))}
            className={`underline underline-offset-1 absolute bottom-0 right-0 `}>
            {readMore ? "read less..." : "read more..."}
          </button>
          <div className={`${!readMore && `hidden`} `}>
            <div className="flex items-center gap-2 text-lg capitalize">
              <p className="font-bold text-xl">Psalm:</p>
              <p>Isaiah 11:1-11</p>
            </div>
            <div className="flex items-center gap-2 text-lg capitalize">
              <p className="font-bold text-xl">Epistile:</p>
              <p>Isaiah 11:1-11</p>
            </div>
            <div className="flex items-center gap-2 text-lg capitalize">
              <p className="font-bold text-xl">Gospel:</p>
              <p>Isaiah 11:1-11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
