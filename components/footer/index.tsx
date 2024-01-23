import React from "react";
import AppLogo from "../shared/app-logo";
import AppStore from "./icons/app-store";
import GooglePlayStore from "./icons/google-play-store";
import Link from "next/link";

const footerLinks = [
  [
    [
      {
        name: "Product",
        isHeading: true,
      },
      {
        name: "Overview",
      },
      {
        name: "Features",
      },
      {
        name: "Solutions",
      },
      {
        name: "Tutorials",
      },
      {
        name: "Pricing",
      },
    ],
    [
      {
        name: "Company",
        isHeading: true,
      },
      {
        name: "About us",
      },
      {
        name: "Careers",
      },
      {
        name: "Press",
      },
      {
        name: "News",
      },
      {
        name: "Contact",
      },
    ],
  ],
  [
    [
      {
        name: "Resources",
        isHeading: true,
      },
      {
        name: "Blog",
      },
      {
        name: "Events",
      },
      {
        name: "Help Center",
      },
      {
        name: "Tutorials",
      },
      {
        name: "Support",
      },
    ],
    [
      {
        name: "Legal",
        isHeading: true,
      },
      {
        name: "Terms",
      },

      {
        name: "Privacy",
      },

      {
        name: "Cookies",
      },

      {
        name: "Licences",
      },

      {
        name: "Contact",
      },
    ],
  ],
];

function Footer() {
  return (
    <footer className="app-container max-[1077px]:flex-col pt-[96px] pb-12 flex items-start justify-between gap-8">
      <div className="flex max-w-[400px] max-[1077px]:max-w-full flex-col gap-8">
        <div className="flex gap-[10px] items-center">
          <AppLogo />
          <h2 className="text-[24px] font-semibold leading-normal">
            ClearLink<span className="text-blue-dark-400">.</span>
          </h2>
        </div>
        <p className="text-lg-regular text-grey-600">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="flex-1 max-[1077px]:w-full max-[746px]:flex-col flex gap-8">
        <ul className="grid grid-cols-2 max-[480px]:gap-y-8 max-[480px]:grid-cols-1 gap-y-4 gap-x-8 flex-1">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="grid gap-y-4 gap-x-8 grid-cols-2">
              {item.map((ele, index) => (
                <div key={index} className="flex flex-col gap-4">
                  {ele.map(({ isHeading, name }, id) => (
                    <li key={id}>
                      {!isHeading ? (
                        <Link
                          className="text-lg-semibold hover:text-blue-700 text-grey-600"
                          href="#"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span className="text-md-semibold text-grey-500">
                          {name}
                        </span>
                      )}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <p className="text-md-semibold text-blue-dark-400">Get the app</p>
          <AppStore />
          <GooglePlayStore />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
