import {
  FaChurch,
  FaHandHoldingDollar,
  FaHandsPraying,
  FaHouseChimney,
  FaHouseUser,
} from "react-icons/fa6";
import { NavLink, OrderOfServiceData } from "../types/types";
export const navLinks: NavLink[] = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHouseChimney />,
  },
  {
    id: 2,
    url: "/sunday-service",
    text: "sunday service",
    icon: <FaHandsPraying />,
  },
  {
    id: 3,
    url: "/aboutUs",
    text: "about us",
    icon: <FaHouseUser />,
  },
  {
    id: 4,
    url: "#",
    text: "give",
    icon: <FaHandHoldingDollar />,
  },
  {
    id: 5,
    url: "/parish",
    text: "parish",
    icon: <FaChurch />,
  },
] as const;

export const orderOfServiceData: OrderOfServiceData = {
  title: "order of holy communinion service",
  theme: "prepare to meet your god",
  time: "8:00am",
  type: "combined service",
  preacher: "vicar",
  intercession: "mrs okesesan",
  order: [
    {
      index: 1,
      text: "processional hymn: ch 71",
    },
    {
      index: 2,
      text: "bible study: ch 1:1 - 1:10",
    },
    {
      index: 3,
      text: "womens prayer meeting: ch 5",
      readings: {
        OTreading: "isaiah 50:1-6 - Mrs Okeke",
        psalm: "psalm 145 - Mrs Okeke",
        epistile: "romans 6:1 - Mrs Okeke",
        gradualHymn: "ch 128",
        gospel: "john 1:1 - Mrs Okeke",
      },
    },
    {
      index: 4,
      text: "nicene creed to prayer",
    },
    {
      index: 5,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 6,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 7,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 8,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 9,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 10,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 11,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 12,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 13,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 14,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 15,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 16,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 17,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 18,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 19,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 20,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 21,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 22,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 23,
      text: "womens prayer meeting: ch 5",
    },
    {
      index: 24,
      text: "womens prayer meeting: ch 5",
    },
  ],
};

export const schemeOfWeek = [
  {
    id: 1,
    day: "sunday",
    services: [
      {
        title: "1st service",
        time: "7:00am - 9:00am",
      },
      {
        title: "2nd service",
        time: "9:00am - 11:00am",
      },
    ],
  },
  {
    id: 2,
    day: "tuesday",
    services: [
      {
        title: "bible study",
        time: "6:00pm",
      },
    ],
  },
  {
    id: 3,
    day: "wednesday",
    services: [
      {
        title: "midweek prayer meeting & communion service",
        time: "6:00pm",
      },
    ],
  },
  {
    id: 4,
    day: "thursday",
    services: [
      {
        title: "womens prayer meeting",
        time: "6:00pm",
      },
    ],
  },
];
