"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0 }}>
      <motion.div style={{ y, position: "absolute", inset: "-12% 0", height: "124%" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 32%",
          }}
        />
      </motion.div>
    </div>
  );
}
