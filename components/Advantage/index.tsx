import React from "react";
import Video from "./icons/video";
import Sound from "./icons/sound";
import Calendar from "./icons/calendar";
import Unlocked from "./icons/unlocked";
import Image from "next/image";
import Teams from "@/public/teams.png";
import Illustration from "./icons/illustration";

const features = [
  {
    Icon: Video,
    heading: "Crystal-clear HD video",
    body: "No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    Icon: Sound,
    heading: "Noise-canceling audio",
    body: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    Icon: Calendar,
    heading: "Scheduling made easy",
    body: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    Icon: Unlocked,
    heading: "Bank-grade security",
    body: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

function Advantage() {
  return (
    <section className="py-[96px] app-container flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-lg-semibold text-blue-700">
            The ClearLink Advantage
          </p>
          <h2 className="display-lg-semibold text-grey-800">
            Why choose ClearLink?
          </h2>
        </div>
        <p className="max-w-[842px] text-xs-regular text-gray-500">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="flex max-[920px]:flex-col max-[920px]:gap-[12.5rem] items-center gap-10">
        <div className="flex-1 py-5 grid grid-cols-2 gap-x-10 gap-y-[60px]">
          {features.map(({ Icon, heading, body }, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <span className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-grey-50 border border-grey-200">
                <Icon />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="display-xs-semibold text-grey-900">{heading}</h3>
                <p className="text-lg-regular text-grey-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex relative justify-center">
          <Illustration className="absolute top-[-225px]" />
          <Image
            src={Teams}
            alt="Teams"
            className="w-auto h-[527px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Advantage;
