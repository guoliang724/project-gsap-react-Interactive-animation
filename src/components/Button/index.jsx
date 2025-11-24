import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import style from "./index.module.less";

export default function Button({ children, onClick, block = false, disabled }) {
  const wrapperRef = useRef();

  const tlRef = useRef();

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({
        defaults: { ease: "power4.in" },
        paused: true,
      });

      tlRef.current
        .to("span:nth-of-type(1)", {
          x: 10,
        })
        .to(
          "span:nth-of-type(2)",
          {
            scale: 1,
          },
          "<"
        )
        .to(
          "span:nth-of-type(3)",
          {
            x: 0,
          },
          "<"
        );
    },
    {
      scope: wrapperRef,
    }
  );

  const handleMouseEnter = () => {
    if (!disabled && tlRef.current) {
      tlRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };

  return (
    <button
      style={{ width: block && "100%", cursor: disabled && "default" }}
      onClick={disabled ? null : onClick}
      className={style.wrapper}
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
      <span></span>
      <span></span>
    </button>
  );
}
