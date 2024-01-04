import ImageComponent from '@/app/lib/imageComponent'
import React from 'react'

export default function Officials() {
  return (
    <div className="border-2 border-primary flex items-center gap-5 rounded-lg  text-primary h-fit">
      <div className="w-2/5 h-[100px] relative">
        <ImageComponent src={"/images/profile.jpg"} className={`rounded-l-md`} />
      </div>
      <div className=" flex flex-col gap-2  w-full">
        <div className="name text-xl font-bold">Revd Daniel.O.Ajayi</div>
        <div className="title">Vicar</div>
      </div>
    </div>
  );
}
