//Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

export const sidebarData = [
  { icon: UilEstate, heading: "DASHBOARD" },
  { icon: UilClipboardAlt, heading: "COMPANY OKR" },
  { icon: UilPackage, heading: "PRODUCT" },
  { icon: UilUsersAlt, heading: "MARKETING" },
  { icon: UilChart, heading: "SALES" },
  { icon: UilSignOutAlt, heading: "LOGOUT" },
];

export const cardData = [
  {
    title: "Sales",
    color: {
      backGround: " linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    person: "Ram",
  },
  {
    title: "Product",
    color: {
      backGround:
        "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 80,
    person: "Naina",
  },
  {
    title: "Marketing",
    color: {
      backGround: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    person: "Peter",
  },
];
