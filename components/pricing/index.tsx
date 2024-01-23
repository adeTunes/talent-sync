import React from "react";
import CheckCircle from "./icons/check-circle";
import Image from "next/image";
import VideoCall from "./images/video-call.png";

const planBenefits = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Peronalized onboarding",
];

function Pricing() {
  return (
    <section className="app-container max-[795px]:flex-col flex items-center gap-10 py-[96px]">
      <div className="max-w-[579px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h2 className="display-lg-semibold max-[600px]:text-[36px] text-grey-900">
              Ready to clear the path to perfect communication?
            </h2>
            <ul className="flex flex-col gap-5">
              {planBenefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle />
                  <span className="text-xs-regular text-grey-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-auto h-[600px]">
        <Image
          src={VideoCall}
          alt="Video call"
          className="w-full max-[600px]:h-[450px] h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Pricing;
