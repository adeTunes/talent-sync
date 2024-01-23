import { Avatar, AvatarGroup, Rating } from "@mantine/core";
import Emoji from "./icons/emoji";
import Message from "./icons/message";
import Mic from "./icons/mic";
import Settings from "./icons/settings";
import ShareScreen from "./icons/share-screen";
import Video from "./icons/video";
import Vector1 from "./images/vector-img-1.png";
import Vector2 from "./images/vector-img-2.png";
import Vector3 from "./images/vector-img-3.png";
import Vector4 from "./images/vector-img-4.png";
import Vector5 from "./images/vector-img-5.png";
import Vector6 from "./images/vector-img-6.png";
import Link from "next/link";
import AiIcon from "./icons/ai-icon";
import Image from "next/image";

const images = [
  { url: Vector1, color: "#FF9C66" },
  { url: Vector2, color: "#D6BBFB" },
  { url: Vector3, color: "#ACDC79" },
  { url: Vector4, color: "#B3B8DB" },
  { url: Vector5, color: "#FEC84B" },
  { url: Vector6, color: "#FEA3B4" },
];
const videoControls = [Mic, Video, ShareScreen, Emoji, Message, Settings];

function HeroBody() {
  return (
    <section className="flex-1 flex items-center">
      <div className="flex max-[890px]:flex-col max-[890px]:mx-auto max-[890px]:items-center max-[890px]:gap-[80px] gap-10">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[750px] max-[989px]:text-[54px] hero-text text-gray-800">
              Uniting the world,
              <br /> one video call at a time
            </h1>
            <p className="text-xs-regular max-[989px]:text-[20px] max-w-[662px] text-grey-500">
              Experience the future of communication with ClearLink - where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button className="text-md-semibold whitespace-nowrap px-7 py-4 bg-blue-700 rounded-[100px] text-white">
              Sign up for free
            </button>
            <Link href="#" className="flex items-center gap-3">
              <AiIcon />
              <span className="text-lg-semibold whitespace-nowrap text-blue-700">
                Discover AI assistant
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <AvatarGroup>
              <Avatar src="/avatar-1.png" size={40} radius="xl" />
              <Avatar src="/avatar-2.png" size={40} radius="xl" />
              <Avatar src="/avatar-3.png" size={40} radius="xl" />
              <Avatar src="/avatar-4.png" size={40} radius="xl" />
              <Avatar src="/avatar-5.png" size={40} radius="xl" />
            </AvatarGroup>
            <div className="flex flex-col gap-1">
              <span className="flex gap-1">
                <span className="flex items-center gap-2">
                  <Rating value={5} />
                  <span className="text-md-semibold text-grey-700">5.0</span>
                </span>
              </span>
              <p className="text-md-medium text-grey-600">
                from 3,000+ reviews
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-2xl w-fit flex-1 h-fit border bg-blue-50 shadow-md border-blue-200 flex flex-col gap-10">
          <div className="grid gap-5 grid-cols-3">
            {images.map(({ color, url }, idx) => (
              <div
                key={idx}
                className="w-auto h-[160px] rounded-lg"
                style={{ background: color }}
              >
                <Image
                  src={url}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {videoControls.map((Item, idx) => (
              <span
                className="w-11 h-11 hover:bg-[#f5f5f6] border cursor-pointer shadow-sm flex items-center justify-center border-blue-100 bg-white rounded-full"
                key={idx}
              >
                <Item />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBody;
