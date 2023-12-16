import { FaChurch, FaHandHoldingDollar, FaHandsPraying, FaHouseChimney, FaHouseUser } from "react-icons/fa6";
export const navLinks = [
    {
        id: 1,
        url: "/",
        text: "home",
        icon: <FaHouseChimney />
    },
    {
        id: 2,
        url: "#",
        text: "sunday service",
        icon: <FaHandsPraying />

    },
    {
        id: 3,
        url: "#",
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
        url: "#",
        text: "parish",
        icon: <FaChurch />,

    },

];

export const schemeOfWeek = [
    {
        id: 1,
        day: "sunday",
        services: [{
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
        services: [{
            title: "bible study",
            time: "6:00pm",
        },
        ],
    },
    {
        id: 3,
        day: "wednesday",
        services: [{
            title: "midweek prayer meeting & communion service",
            time: "6:00pm",
        },
        ],
    },
    {
        id: 4,
        day: "thursday",
        services: [{
            title: "womens prayer meeting",
            time: "6:00pm",
        },
        ],
    },



];






