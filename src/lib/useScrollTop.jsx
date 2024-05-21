"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  //   const { pathname } = useLocation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [router]);

  return;
};
