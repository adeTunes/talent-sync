"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const navLinks = ["Products", "Solutions", "Resources", "Pricing"];

function MobileSidebar() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        className="hidden max-[890px]:inline-block"
        size="md"
      />
      <Drawer
        radius="md"
        opened={opened}
        onClose={close}
        aria-label="Toggle navigation"
      >
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-[2rem]">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]"
                >
                  <span>{item}</span>
                  <IoChevronDown size={18} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <button className="text-md-semibold px-6 py-[14px] shadow-sm border border-grey-400 bg-transparent rounded-[100px] text-gray-900">
              Talk to sales
            </button>
            <button className="text-md-semibold px-6 py-[14px] bg-blue-700 rounded-[100px] text-white">
              Sign up for free
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default MobileSidebar;
