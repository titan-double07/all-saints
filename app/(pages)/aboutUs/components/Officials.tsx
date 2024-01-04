import ImageComponent from '@/app/lib/imageComponent'
import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';

export default function Officials() {
    return (
      <>
    <div className="border-2 border-primary flex items-center gap-5 rounded-lg  text-primary h-fit">
      <div className="w-[150px] h-[100px] relative">
        <ImageComponent src={"/images/profile.jpg"} className={`rounded-l-md`} />
      </div>
      <div className=" flex flex-col gap-2  w-full">
        <div className="name text-xl font-bold">Revd Daniel.O.Ajayi</div>
        <div className="title">Vicar</div>
      </div>
    </div>
    <div className="border-2 border-primary flex items-center gap-5 rounded-lg  text-primary h-fit">
      <div className="w-[150px] h-[100px] relative">
        <ImageComponent src={"/images/profile.jpg"} className={`rounded-l-md`} />
      </div>
      <div className=" flex flex-col gap-2  w-full">
        <div className="name text-xl font-bold">Revd Daniel.O.Ajayi</div>
        <div className="title">Vicar</div>
      </div>
        </div>
        <div className="flex justify-between items-center mx-auto px-4 w-full text-4xl">
          <button><FaCaretLeft/></button>
          <button><FaCaretRight/></button>
        </div>
      </>
  );
}
