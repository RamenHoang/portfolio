"use client";

import {
  RiTwitchFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.facebook.com/hohoang.vuong.96?locale=vi_VN",
    name: <RiFacebookFill />,
  },
  {
    path: "https://x.com/VuongW6997",
    name: <RiTwitchFill />,
  },
  {
    path: "https://www.linkedin.com/in/ho%C3%A0ng-v%C6%B0%C6%A1ng-35176b217/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/eko_smith_website/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
