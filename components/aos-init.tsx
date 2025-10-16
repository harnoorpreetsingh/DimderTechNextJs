"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      // once: true, // only animate once
      easing: "ease-in-out",
    });
  }, []);

  return null; // no visible output
}
