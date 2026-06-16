"use client";

import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase, SplitText);

CustomEase.create("hop", "0.9, 0, 0.1, 1");
CustomEase.create("glide", "0.8, 0, 0.2, 1");

export default function HeroReveal() {
  useEffect(() => {
    let splitInstances: SplitText[] = [];
    let introStarted = false;
    let fontsReady = false;
    let brandComplete = false;

    gsap.set(".preloader-label", { opacity: 0, scale: 0.97 });
    gsap.set(".preloader-char", {
      opacity: 0,
      y: 16,
      scale: 0.5,
    });

    const brandTl = gsap.timeline({ delay: 0.15 });

    brandTl.to(".preloader-label", {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    });

    brandTl.to(
      ".preloader-char",
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.48,
        stagger: 0.08,
        ease: "back.out(2)",
      },
      "-=0.35",
    );

    brandTl.to(
      ".preloader-label",
      {
        scale: 1.02,
        duration: 0.35,
        ease: "power1.out",
      },
      "-=0.1",
    );

    brandTl.to(".preloader-label", {
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    });

    const tryStartIntro = () => {
      if (!fontsReady || !brandComplete || introStarted) return;
      introStarted = true;
      init();
    };

    brandTl.eventCallback("onComplete", () => {
      brandComplete = true;
      tryStartIntro();
    });

    const init = () => {
      const introImages = document.querySelectorAll(".intro-img");
      const introImgScale = 0.2;
      const introImgGap = 40;
      const introImgRotations = [-15, 5, -7.5, 10, -2.5];

      const introImgScaledWidth = window.innerWidth * introImgScale;
      const introImgRowWidth = introImgScaledWidth * 5 + introImgGap * 4;
      const introImgCenteredX = (window.innerWidth - introImgRowWidth) / 2;
      const introImgOffScreenX = introImgCenteredX - window.innerWidth * 1.3;

      introImages.forEach((img, i) => {
        const centeredX =
          introImgCenteredX +
          i * (introImgScaledWidth + introImgGap) +
          introImgScaledWidth / 2 -
          window.innerWidth / 2;

        const offScreenX =
          introImgOffScreenX +
          i * (introImgScaledWidth + introImgGap) +
          introImgScaledWidth / 2 -
          window.innerWidth / 2;

        gsap.set(img, {
          scale: introImgScale,
          x: offScreenX,
          rotation: introImgRotations[i],
          borderRadius: "2.5rem",
        });

        (img as HTMLElement).dataset.centeredX = String(centeredX);
      });

      const splitResult = SplitText.create(
        "nav a, .hero-eyebrow, .hero-header h1, .hero-cta p, .hero-cta a, .hero-scroll span",
        {
          type: "lines",
          linesClass: "line",
          mask: "lines",
          autoSplit: true,
        },
      );
      splitInstances = Array.isArray(splitResult)
        ? splitResult
        : [splitResult];

      gsap.set(".line", { y: "125%" });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(".preloader", {
        scaleX: 1,
        duration: 1.5,
        ease: "glide",
        onComplete: () => {
          gsap.set(".preloader", { transformOrigin: "right" });
        },
      });

      tl.to(".preloader", {
        scaleX: 0,
        duration: 1.25,
        ease: "hop",
      });

      tl.to(
        ".preloader-label",
        {
          opacity: 0,
          y: -10,
          filter: "blur(6px)",
          duration: 0.55,
          ease: "power2.in",
        },
        "<0.5",
      );

      tl.to(
        ".preloader-overlay",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "hop",
        },
        "<0.75",
      );

      introImages.forEach((img) => {
        tl.to(
          img,
          {
            x: parseFloat((img as HTMLElement).dataset.centeredX || "0"),
            duration: 1.5,
            ease: "glide",
          },
          "<0.025",
        );
      });

      tl.to(
        ".intro-img:nth-child(2), .intro-img:nth-child(3)",
        { x: "-100vw", duration: 1.5, ease: "glide" },
        "spread",
      );
      tl.to(
        ".intro-img:nth-child(5), .intro-img:nth-child(6)",
        { x: "100vw", duration: 1.5, ease: "glide" },
        "spread",
      );

      tl.to(
        ".hero-img",
        {
          scale: 1,
          x: 0,
          rotation: 0,
          borderRadius: 0,
          duration: 1.5,
          ease: "glide",
        },
        "<",
      );

      tl.to(
        "nav .line",
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "<1",
      );

      tl.to(
        ".hero-header .line",
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "<",
      );

      tl.to(
        ".hero-cta .line",
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "<0.25",
      );

      tl.to(
        ".hero-scroll .line",
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "<0.15",
      );
    };

    document.fonts.ready.then(() => {
      fontsReady = true;
      tryStartIntro();
    });

    return () => {
      brandTl.kill();
      splitInstances.forEach((instance) => instance.revert());
      gsap.killTweensOf("*");
    };
  }, []);

  return null;
}
