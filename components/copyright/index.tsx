import React from "react";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Github from "./icons/github";
import Youtube from "./icons/youtube";

const socials = [Linkedin, Twitter, Facebook, Instagram, Github, Youtube];

function Copyright() {
  return (
    <section className="bg-grey-50">
      <section className="app-container max-[580px]:flex-col gap-8 flex justify-between items-center py-12">
        <p className="text-md-regular text-grey-500">
          &copy; 2023 ClearLink. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socials.map((Item, idx) => (
            <Item key={idx} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Copyright;
