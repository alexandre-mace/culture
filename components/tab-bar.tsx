"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Library, Search, Moon, Sun, Shuffle } from "lucide-react";
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
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { navigationCategories, searchItems } from "@/lib/search-data";

// Category emojis mapping
const categoryEmojis: Record<string, string> = {
  "Astronomie": "🔭",
  "Physique": "⚛️",
  "Mathematiques": "🔢",
  "Biologie": "🧬",
  "Medecine": "⚕️",
  "Inventions": "💡",
  "Epoques": "🦕",
  "Explorations": "🧭",
  "Empires": "👑",
  "Guerres": "⚔️",
  "Esclavage": "⛓️",
  "Pandemies": "🦠",
  "Philosophie": "🏛️",
  "Litterature": "✍️",
  "Peinture": "🎨",
  "Architecture": "🏗️",
  "Musique classique": "🎼",
  "Jazz": "🎺",
  "Photographie": "📷",
  "Cinema": "🎬",
  "Arts decoratifs": "🪑",
  "Mouvements politiques": "⚖️",
  "Democratie": "🗳️",
  "Droits civiques": "✊",
  "Revolutions industrielles": "🏭",
  "Economie": "📈",
  "Monnaies & Banques": "💰",
  "Psychologie": "🧠",
  "Religions": "🕊️",
  "Mythologies": "🐉",
};

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHome = pathname === "/";
  const isTout = pathname === "/tout";
  const isTimeline = !isHome && pathname !== "/tout";

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-around h-14">
          {/* Accueil */}
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center gap-1 flex-1 h-full",
              isHome
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground transition-colors"
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-[10px]">Accueil</span>
          </Link>

          {/* Sujet - opens drawer */}
          <button
            onClick={() => setSubjectOpen(true)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 flex-1 h-full",
              isTimeline || isTout
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground transition-colors"
            )}
          >
            <Library className="h-5 w-5" />
            <span className="text-[10px]">Sujet</span>
          </button>

          {/* Recherche */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="h-5 w-5" />
            <span className="text-[10px]">Recherche</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-foreground transition-colors"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="text-[10px]">
              {mounted && theme === "dark" ? "Clair" : "Sombre"}
            </span>
          </button>
        </div>
      </nav>

      {/* Subject selector drawer */}
      <Drawer open={subjectOpen} onOpenChange={setSubjectOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="pb-2">
            <DrawerTitle>Choisir un sujet</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-6 overflow-y-auto">
            {/* Random / All option */}
            <button
              onClick={() => {
                router.push("/tout");
                setSubjectOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors mb-4",
                isTout
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent"
              )}
            >
              <span className="text-xl">🎲</span>
              <span className="font-medium">Toutes les catégories</span>
              <Shuffle className="h-4 w-4 ml-auto text-muted-foreground" />
            </button>

            {/* Categories */}
            {navigationCategories.map((category) => (
              <div key={category.name} className="mb-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                  {category.name}
                </h3>
                <div className="space-y-0.5">
                  {category.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <button
                        key={item.href}
                        onClick={() => {
                          router.push(item.href);
                          setSubjectOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent"
                        )}
                      >
                        <span className="text-lg">{categoryEmojis[item.name] || "📚"}</span>
                        <span className="text-sm">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

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
