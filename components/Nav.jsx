// link (next js)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

import { useState } from "react";

const links = [
  { path: "/", name: "Trang Chủ" },
  { path: "/projects", name: "Dự Án" },
  { path: "/contact", name: "Liên Hệ" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const path = usePathname();

  const handleLinkClick = () => {
    setIsNavOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <>
      <nav className={`${containerStyles} ${isNavOpen ? "open" : ""}`}>
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`capitalize ${linkStyles}`}
              onClick={handleLinkClick}
            >
              {link.path === path && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className={`${underlineStyles}`}
                />
              )}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
