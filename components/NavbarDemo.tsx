"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Me</HoveredLink>
            <HoveredLink href="/experience">Professional Experience</HoveredLink>
            <HoveredLink href="/projects">Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skills/frontend">Frontend Development</HoveredLink>
            <HoveredLink href="/skills/backend">Backend Development</HoveredLink>
            <HoveredLink href="/skills/fullstack">Full Stack Expertise</HoveredLink>
            <HoveredLink href="/skills/other">Other Skills (Docker, Web3, etc.)</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/resume">Download Resume</HoveredLink>
            <HoveredLink href="/achievements">Achievements & Certifications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact/fullstack">Full Stack Development</HoveredLink>
            <HoveredLink href="/contact/frontend">Frontend Development</HoveredLink>
            <HoveredLink href="/contact/backend">Backend Development</HoveredLink>
            <HoveredLink href="/contact/collaborations">Collaborations & Open Source</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
