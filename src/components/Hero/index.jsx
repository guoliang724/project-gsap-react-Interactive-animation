import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, lazy, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
import style from "./index.module.less";

const Hero = () => {
  const wrapperRef = useRef();

  const setup = (scene) => {
    const main = scene.findObjectById("3c287c31-40d9-4b71-81d5-bfa02215f540");
    main && main.scale.set(20, 20, 20);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        "img",
        {
          alpha: 0,
          rotationX: 90,
          rotationY: 50,
        },
        {
          alpha: 1,
          rotationX: 0,
          rotationY: 0,
          force3D: true,
          duration: 0.8,
        },
        2.5
      );

      gsap.to("div", {
        scrollTrigger: {
          trigger: "div",
          toggleActions: "restart pause resume reset",
          start: "top 100px",
          scrub: 1,
        },
        y: (i) => {
          return i % 2 ? -200 : -400;
        },
        duration: 3,
      });
    },
    {
      scope: wrapperRef,
    }
  );

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <div className={style.item}>
        <img src="/hero01.png" alt="" style={{ marginTop: 200 }} />
        <img src="/hero02.png" alt="" style={{ marginTop: 400 }} />
      </div>
      <div className={style.item}>
        <img src="/hero03.png" alt="" style={{ marginTop: 460 }} />
        <img src="/hero04.png" alt="" style={{ marginTop: 350 }} />
      </div>
      <section className={style.item}>
        <Suspense>
          <Spline
            scene="https://prod.spline.design/oqexVXpS59h54Vdy/scene.splinecode"
            onLoad={setup}
            style={{ height: "100vh", position: "sticky", top: "0" }}
          />
        </Suspense>
      </section>
      <div className={style.item}>
        <img src="/hero05.png" alt="" style={{ marginTop: 250 }} />
        <img src="/hero06.png" alt="" style={{ marginTop: 440 }} />
      </div>
      <div className={style.item}>
        <img src="/hero07.png" alt="" style={{ marginTop: 430 }} />
        <img src="/hero08.png" alt="" style={{ marginTop: 410 }} />
      </div>
    </div>
  );
};

export default Hero;
