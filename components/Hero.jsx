import Link from "next/link";
import { Button } from "./ui/button";
import { BookAIcon, Download, Eye, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  ReInstara,
} from "react-icons/ri";
//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

import '@fontsource/righteous';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[120vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web and Software Developer
            </div>
            <h1 className="righteous-font font-bold text-6xl">Hello, my name is Kroes Soda</h1>
            <p className="subtitle mt-2 text-left">
              I am a junior IT developer with more than one year of experience
              in building software systems, mainly working on databases and SQL
              technologies. I also have knowledge of other development tools
              such as ReactJs, Spring Boot (MVC Framework) and C# (ASP.Net ,&
              ASP.Net Core Framework). My goal is to learn new technologies and
              try out different approaches to delivering quality software, be it
              through collaboration or indi vidual work.
            </p>
            {/* button */}
            <div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 
          mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />{" "}
                </Button>
              </Link>
              <a target="_blank" href="/kroes-soda/resume.pdf">
              <Button variant="secondary" className="gap-x-2">
                Resume<Download size={18} />{" "}
              </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover: text-primary transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1*/}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years Of Experience"
            />

            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[2rem]"
              icon={<RiTodoFill />}
              endCountNum={10}
              badgeText="Finished Project"
            />

            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark 
            w-[500px] h-[500px] bg-no-repeat absolute -top-1 right-2"
            ></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
              imgSrc="/hero/soda_developer.png"
            />
          </div>
        </div>

        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-4 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
