"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Search, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { navigationCategories, searchItems } from "@/lib/search-data";

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHome = pathname === "/";
  const isDiscover = pathname === "/discover";

  const tabs = [
    {
      name: "Accueil",
      href: "/",
      icon: Home,
      active: isHome,
    },
    {
      name: "Découvrir",
      href: "/discover",
      icon: Sparkles,
      active: isDiscover,
    },
    {
      name: "Recherche",
      href: "#",
      icon: Search,
      active: false,
      onClick: () => setSearchOpen(true),
    },
    {
      name: mounted && theme === "dark" ? "Clair" : "Sombre",
      href: "#",
      icon: mounted && theme === "dark" ? Sun : Moon,
      active: false,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-around h-14">
          {tabs.map((tab) =>
            tab.onClick ? (
              <button
                key={tab.name}
                onClick={tab.onClick}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 h-full",
                  "text-muted-foreground hover:text-foreground transition-colors"
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-[10px]">{tab.name}</span>
              </button>
            ) : (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 h-full",
                  tab.active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-[10px]">{tab.name}</span>
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Search dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Rechercher..." />
        <CommandList className="max-h-[60vh]">
          <CommandEmpty>Aucun resultat.</CommandEmpty>
          <CommandGroup heading="Timelines">
            {navigationCategories.flatMap((cat) => cat.items).map((item) => (
              <CommandItem
                key={item.href}
                value={`timeline ${item.name}`}
                onSelect={() => {
                  router.push(item.href);
                  setSearchOpen(false);
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Personnes & Evenements">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.name} ${item.category}`}
                onSelect={() => {
                  router.push(item.href);
                  setSearchOpen(false);
                }}
              >
                <span>{item.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {item.category}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
