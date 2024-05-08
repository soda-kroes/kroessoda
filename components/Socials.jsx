"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiInstagramFill,
  RiTelegramFill
} from "react-icons/ri";

import Link  from "next/link";

const icons = [
    {
        path: "https://www.youtube.com/channel/UCZTsTW5m1gneLakwIVRvx3g",
        name: <RiYoutubeFill />
    },
    {
        path: "https://www.linkedin.com/in/kroes-soda-1696a92ba/",
        name: <RiLinkedinFill />
    },
    {
        path: "https://github.com/soda-kroes",
        name: <RiGithubFill />
    },
    {
        path: "https://web.facebook.com/kroessoda/",
        name: <RiFacebookFill />
    },
    {
        path: "https://t.me/Kroessoda",
        name: <RiTelegramFill />
    }
]
const Socials = ({containerStyles, iconsStyles}) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon,index)=>{
        return(
            <Link href={icon.path} key={index} target="_blank">
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
        )
    })}
  </div>;
};
export default Socials;
