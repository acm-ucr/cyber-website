"use client";

import { useEffect } from "react";
import { useNavbarTheme } from "@/app/context/navbar-context";
import NotFound from "@/components/notFound/404";

export default function NotFoundPage() {
  const { setTheme } = useNavbarTheme();

  useEffect(() => {
    setTheme("red");

    return () => setTheme("green");
  }, [setTheme]);

  return <NotFound />;
}
