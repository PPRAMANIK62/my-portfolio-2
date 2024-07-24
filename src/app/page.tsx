import { Download } from "lucide-react";
import React from "react";

// components
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />
              <span className="text-accent">Purbayan Pramanik</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionate full stack developer with a focus on creating scalable
              and high-performance web applications.
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase gap-2"
                href={"https://rxresu.me/ppramanik62/full-stack-developer"}
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* <Photo /> */}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
