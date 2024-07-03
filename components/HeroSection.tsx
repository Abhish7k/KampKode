import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import OrbitingCircles from "./ui/orbiting-circles";
import {
  FaAndroid,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      {/* hero */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
        {/* content */}

        <div className="h-full z-20 flex flex-col justify-center gap-10">
          {/* heading  */}
          <div className="mx-10 flex flex-col gap-6 justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-[#101828]">
              We&apos;ve really sped up our workflow
            </h1>

            <h4 className="text-sm font-medium text-[#475467]">
              <span>We&apos;ve just released a new update!</span> Check out the
              all new dashboard view. Pages and now load faster.you can try us
              for free for 30 days.
              <br />
              Join 4,000+ companies already growing
            </h4>
          </div>

          {/* cta btns  */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Button
              variant="outline"
              size="lg"
              className="flex gap-2 text-lg font-semibold text-[#344054] shadow"
            >
              <ArrowRight width={20} height={20} />
              Start Learning Today
            </Button>
            <Button
              size="lg"
              className="px-24 md:px-6 text-lg font-semibold bg-[#7F6EFC] text-white hover:bg-purple-600 transition-all"
            >
              Join Now
            </Button>
          </div>
        </div>

        {/* Inner Circles

        {/* first */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={250}
        ></OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={250}
        ></OrbitingCircles>

        {/* second */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={350}
        >
          <Icons.FaCss3Alt className="w-52 h-52 text-blue-500" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={350}
        >
          <Icons.FaGitlab className="w-52 h-52 text-red-400" />
        </OrbitingCircles>

        {/* third */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={30}
          delay={5}
          radius={450}
          reverse
        >
          <Icons.FaReact className="w-52 h-52 text-blue-400" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={30}
          delay={20}
          radius={450}
          reverse
        >
          <Icons.FaAws className="w-52 h-52 text-gray-800" />
        </OrbitingCircles>

        {/* fourth (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={550}
          duration={20}
          reverse
        >
          <Icons.FaNodeJs className="w-52 h-52 text-green-600" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={550}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.RiFlutterFill className="w-52 h-52 text-blue-800" />
        </OrbitingCircles>

        {/* fifth */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={30}
          delay={5}
          radius={650}
        >
          <Icons.FaHtml5 className="w-52 h-52 text-orange-600" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={30}
          delay={20}
          radius={650}
        >
          <Icons.FaAndroid className="w-52 h-52 text-green-500" />
        </OrbitingCircles>

        {/* sixth */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={850}
        ></OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={850}
        ></OrbitingCircles>
      </div>
    </div>
  );
}

const Icons = {
  FaCss3Alt,
  FaGitlab,
  FaReact,
  FaAws,
  FaNodeJs,
  RiFlutterFill,
  FaHtml5,
  FaAndroid,
};
