"use client";

import { Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const tabNavLinks = ["Products", "More Options"];

function SmallNavlinks() {
  const [opened, { toggle, open, close }] = useDisclosure(false);
  return tabNavLinks.map((item, idx) => (
    <li key={idx} className="hidden max-[890px]:hidden max-[1020px]:flex">
      {item === "More Options" ? (
        <Popover opened={opened} onChange={toggle}>
          <Popover.Target>
            <div onClick={open} className="text-lg-semibold cursor-pointer hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]">
              <span>{item}</span>
              <IoChevronDown size={18} />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]"
                onClick={close}
              >
                <span>Solutions</span>
              </Link>
              <Link
                href="#"
                className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]"
                onClick={close}
              >
                <span>Resources</span>
              </Link>
              <Link
                href="#"
                className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]"
                onClick={close}
              >
                <span>Pricing</span>
              </Link>
            </div>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <div className="text-lg-semibold hover:text-blue-dark-400 text-grey-500 flex items-center gap-[6px]">
          <span>{item}</span>
          <IoChevronDown size={18} />
        </div>
      )}
    </li>
  ));
}

export default SmallNavlinks;
