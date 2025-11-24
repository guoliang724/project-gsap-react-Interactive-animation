import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import style from "./index.module.less";

export default function Loading() {
  const markRef = useRef();

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        defaults: { ease: "power2.in" },
        onStart() {
          document.documentElement.style.overflow = "hidden";
        },
        onComplete() {
          document.documentElement.style.overflow = "";
        },
      });

      t1.to(
        "span",
        {
          duration: 1,
          yPercent: -200,
          opacity: 0,
          stagger: 0.1,
        },
        1
      ).to(markRef.current, {
        yPercent: -100,
        duration: 0.2,
      });
    },
    {
      scope: markRef,
    }
  );

  return (
    <div className={style.mark} ref={markRef}>
      <p className={style.heading}>
        <span>Meet</span> <span>Sport</span>
        <br></br>
        <span>Diagnostices</span>
      </p>
    </div>
  );
}
