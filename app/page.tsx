'use client'
import HeroSection from "@/components/HeroSection";
import { useState, useEffect } from "react";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <HeroSection />}
    </>
  );
}