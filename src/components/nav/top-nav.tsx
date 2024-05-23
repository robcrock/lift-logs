"use client";

import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../mode-toggle";

export const TopNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
      <nav className="flex flex-row gap-6 text-lg font-medium md:items-center md:text-sm lg:gap-6">
        <Link
          className={cn(
            pathname === "/" ? "dark:text-gray-400" : "text-gray-500",
            "hover:text-gray-900 dark:hover:text-white",
          )}
          href="/"
        >
          Lift Logs
        </Link>
        <Link
          className={cn(
            pathname === "/my-logs" ? "dark:text-gray-400" : "text-gray-500",
            "hover:text-gray-900 dark:hover:text-white",
          )}
          href="/my-logs"
        >
          My Logs
        </Link>
      </nav>
      <div className="ml-auto flex gap-2">
        <SignedOut>
          <div className="text-[#2e026d]">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  );
};
