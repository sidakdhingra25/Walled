"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {};

const Header = (props: Props) => {
  const [navStyle, setNavStyle] = useState("");
  const [logoStyle, setLogoStyle] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() > 150) {
      setNavStyle("border border-border bg-secondary rounded-full px-3");
      setLogoStyle("hidden");
    } else {
      setNavStyle("");
      setLogoStyle("");
    }
  });

  return (
    <div className="Walledy top-7 mx-3 z-30">
      <motion.div
        className={cn(
          `flex max-w-screen-xl mx-auto justify-between items-center my-7 py-2 transition-all`,
          navStyle
        )}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
      >
        <div>
          <Link href="/" className="flex gap-3 items-center">
            <Image
              draggable="false"
              className="select-none"
              height={30}
              width={30}
              src="/logo.png"
              alt="logo"
            />
            <h1
              className={cn(
                logoStyle,
                `font-sans tracking-tight cursor-pointer font-bold text-2xl text-black`
              )}
            >
              Walled
            </h1>
          </Link>
        </div>

        <div>
          <Button className="rounded-full items-center gap-2" size="sm" asChild>
            <Link href={"/editor"}>
              <Sparkles height={15} width={15} fill="#fff" />
              Start a project
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
