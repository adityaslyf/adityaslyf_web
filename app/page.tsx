"use client";
import { SparklesCore } from './Background/background';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { NavbarDemo } from '@/components/NavbarDemo';

export default function Home() {
  return (
    <main className="text-white w-full min-h-screen  h-[200vh] bg-gradient-to-b from-orange-900 to-black overflow-hidden">
      <div className="w-full h-full fixed">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.9}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <NavbarDemo />
      </div>
    </main>
  );
}

