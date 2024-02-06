"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden md:flex w-[206px] h-screen  ext-white">
      <div className="flex flex-col space-y-4 pl-4 pt-4">
        <div className="flex items-center gap-x-2">
          <Image width={40} height={40} alt="Logo" src={"/logo.svg"} />
          <p className={cn(font.className, "font-extrabold text-xl")}>Board</p>
        </div>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                border: "1px solid #E5E7EB",
                width: "100%",
                borderRadius: "8px",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />

        <div className="space-y-1 w-full">
          <Button
            variant={favorites ? "ghost" : "secondary"}
            asChild
            size="lg"
            className="font-normal justify-start px-2 w-full"
          >
            <Link href="/">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Team boards
            </Link>
          </Button>
          <Button
            variant={favorites ? "secondary" : "ghost"}
            asChild
            size="lg"
            className="font-normal justify-start px-2 w-full"
          >
            <Link
              href={{
                pathname: "/",
                query: { favorites: true },
              }}
            >
              <Star className="h-4 w-4 mr-2" />
              Favorite boards
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
