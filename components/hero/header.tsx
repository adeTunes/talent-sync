import React from "react";
import AppLogo from "../shared/app-logo";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { Popover } from "@mantine/core";
import TabNavlinks from "./tab-navlinks";
import SmallNavlinks from "./small-navlink";
import MobileSidebar from "./mobile-sidebar";

const navLinks = ["Products", "Solutions", "Resources", "Pricing"];

function Header() {
  return (
    <header className="py-4 flex bg-grey-100 border border-grey-300 px-8 rounded-[100px]  items-center justify-between">
      <div className="flex gap-[10px] items-center">
        <AppLogo />
        <h2 className="text-[24px] font-semibold leading-normal">
          ClearLink<span className="text-blue-dark-400">.</span>
        </h2>
      </div>
      <nav>
        <ul className="flex w-full items-center transition-[300] max-[1150px]:gap-5 gap-10">
          {navLinks.map((item, idx) => (
            <li key={idx} className="max-[1100px]:hidden inline-block">
              <Link
                href="#"
                className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]"
              >
                <span>{item}</span>
                <IoChevronDown size={18} />
              </Link>
            </li>
          ))}
          <TabNavlinks />
          <SmallNavlinks />
          <MobileSidebar />
        </ul>
      </nav>
      <div className="flex max-[890px]:hidden gap-2">
        <button className="text-md-semibold px-6 py-[14px] shadow-sm border border-grey-400 bg-transparent rounded-[100px] text-gray-900">
          Talk to sales
        </button>
        <button className="text-md-semibold px-6 py-[14px] bg-blue-700 rounded-[100px] text-white">
          Sign up for free
        </button>
      </div>
    </header>
  );
}

export default Header;
