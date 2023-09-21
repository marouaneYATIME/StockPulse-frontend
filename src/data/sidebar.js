/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  sidebar.js
 * Import all icons that will be nedeed in the project
*/

import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Ajouter Produit",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Compte",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profil",
        path: "/profile",
      },
      {
        title: "Modifier Profil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Contact",
    icon: <FaCommentAlt />,
    path: "/contact",
  },
];

export default menu;
