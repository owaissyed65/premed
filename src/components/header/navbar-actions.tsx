"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import ClickAwayListener from "react-click-away-listener";

const NavbarActions = () => {
  const [open, setOpen] = React.useState<{ id: string }>({ id: "" });
  const [content, setContent] = React.useState<{ id: string }>({ id: "" });
  const Actions = [
    {
      id: "1",
      label: "High School",
      Icon: ChevronDown,
      href: "/high-school",
    },
    {
      id: "2",
      label: "Entry Test",
      Icon: ChevronDown,
      href: "/entry-test",
    },
    {
      id: "3",
      label: "UnderGrad",
      Icon: ChevronDown,
      href: "/undergrad",
    },
    {
      id: "4",
      label: "Team",
      Icon: ChevronDown,
      href: "/team",
    },
    {
      id: "5",
      label: "About Us",
      Icon: ChevronDown,
      href: "/about-us",
    },
  ];
  return (
    <div className="flex-1 flex items-center gap-x-10 justify-center relative">
      {Actions.map((action) => (
        <ClickAwayListener
          onClickAway={() => setOpen({ id: "" })}
          key={action.id}
        >
          <Link
            href={action.href}
            className="flex items-center gap-x-1 justify-center relative"
            onMouseEnter={() => {
              setOpen({ id: action.id });
              setTimeout(() => {
                setContent({ id: action.id });
              }, 300);
            }}
          >
            <div className="text-black font-semibold">{action.label}</div>

            <div
              className={cn(
                "absolute top-[30px] bg-white transition-all duration-300 ease-in-out rounded-xl z-50",
                open.id === action.id ? "w-72 h-[200px] p-3" : "w-0 h-0 "
              )}
            >
              {open.id === action.id && (
                <div
                  className={cn(
                    "flex flex-col gap-y-2 transition-all duration-500 ease-in-out ",
                    content.id === action.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  )}
                >
                  {`This is for demo purpose ${action.label}`}
                </div>
              )}
            </div>

            {/* )} */}
            <action.Icon className="w-5 h-5 text-black" />
          </Link>
        </ClickAwayListener>
      ))}
    </div>
  );
};

export default NavbarActions;
