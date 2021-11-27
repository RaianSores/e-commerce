import React from "react";

import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";

export const SidebarData = [
  {
    title: "Login",
    path: "/login",
    icon: <FiLogIn />,
    cName: "nav-text",
  },
  {
    title: "Registar",
    path: "/register",
    icon: <BsHeart />,
    cName: "nav-text",
  },
];
