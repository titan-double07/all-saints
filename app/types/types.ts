import { ReactElement } from "react";

type Icon = ReactElement

//NavLinks type
export type NavLink = {
    id: number
    url: string
    text: string
    icon: Icon
}

//Orger of service type
export type OrderOfServiceData = {
  title: string;
  theme: string;
  time: string;
  type: string;
  preacher: string;
  intercession: string;
  order: {
    index: number;
    text: string;
    readings?: {
      OTreading: string;
      psalm: string;
      epistile: string;
      gradualHymn: string;
      gospel: string;
    };
  }[];
};
//scheme of the week type
export type SchemeOfTheWeek= {

    id: number;
    day: string;
    services: {
        title: string;
        time: string;
    }[];

}

//bank accounts
export type BankAccount = {
  imgUrl: string,
  bankName: string,
  AccNo: number,
  AccName: string,
  type:string,
  purpose?:string,
  
}
