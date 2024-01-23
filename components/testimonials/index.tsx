import React from "react";
import Shopify from "./icons/shopify";
import { Avatar, Rating } from "@mantine/core";
import ArrowLeft from "./icons/arrow-left";
import ArrowRight from "./icons/arrow-right";
import TestimonialImage1 from "./images/testimonial-img-1.jpeg";
import TestimonialImage2 from "./images/testimonial-img-2.jpeg";
import TestimonialImage3 from "./images/testimonial-img-3.jpeg";
import TestimonialImage4 from "./images/testimonial-img-4.jpeg";
import TestimonialImage5 from "./images/testimonial-img-5.jpeg";
import Image from "next/image";

const arrows = [ArrowLeft, ArrowRight];
const row1Images = [
  { src: TestimonialImage1, width: 160, height: 160 },
  { src: TestimonialImage2, width: 160, height: 240 },
];
const row2Images = [
  { src: TestimonialImage3, width: 192, height: 128 },
  { src: TestimonialImage4, width: 160, height: 240 },
  { src: TestimonialImage5, width: 192, height: 128 },
];

function Testimonial() {
  return (
    <section className="bg-grey-50 py-[96px]">
      <section className="app-container">
        <div className="flex max-[1125px]:flex-col px-8 gap-10">
          <div className="flex flex-1 flex-col gap-12">
            <Shopify />
            <Rating value={5} />
            <p className="tracking-[-0.88px] max-[1190px]:text-[28px] leading-[60px] font-medium text-[44px] max-w-[640px]">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <div className="flex max-[524px]:flex-col max-[524px]:gap-7 justify-between items-center">
              <div className="flex items-center gap-4">
                <Avatar size={56} src="/avatar.png" />
                <div className="flex flex-col gap-[2px]">
                  <p className="text-xl-semibold text-grey-900">
                    Sarah Thompson
                  </p>
                  <p className="text-lg-regular text-grey-600">
                    Project Manager, Shopify
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                {arrows.map((Item, idx) => (
                  <div
                    key={idx}
                    style={{ backdropFilter: "blur(4px)" }}
                    className="flex items-center border border-blue-100 bg-[rgba(255,255,255,0.90)] justify-center h-[56px] w-[56px] rounded-full"
                  >
                    <Item />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex min-w-[624px] max-[770px]:min-w-full max-[720px]:hidden flex-1 flex-col gap-4">
            <div className="flex justify-center items-end gap-4">
              {row1Images.map(({ src, width, height }, idx) => (
                <Image
                  key={idx}
                  alt="testimonial image"
                  width={width}
                  height={height}
                  src={src}
                  style={{ width, height, objectFit: "cover" }}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex justify-center items-start gap-4">
              {row2Images.map(({ src, width, height }, idx) => (
                <Image
                  key={idx}
                  alt="testimonial image"
                  width={width}
                  height={height}
                  src={src}
                  style={{ width, height, objectFit: "cover" }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Testimonial;
