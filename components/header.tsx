"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";

const categories = [
  {
    name: "Sciences",
    items: [
      { name: "Astronomie", href: "/astronomie" },
      { name: "Physique", href: "/physique" },
      { name: "Mathematiques", href: "/mathematiques" },
      { name: "Biologie", href: "/biologie" },
      { name: "Medecine", href: "/medecine" },
      { name: "Inventions", href: "/inventions" },
    ],
  },
  {
    name: "Histoire",
    items: [
      { name: "Epoques", href: "/epoques" },
      { name: "Explorations", href: "/explorations" },
      { name: "Empires", href: "/empires" },
      { name: "Guerres", href: "/guerres" },
      { name: "Esclavage", href: "/esclavage" },
      { name: "Pandemies", href: "/pandemies" },
    ],
  },
  {
    name: "Arts",
    items: [
      { name: "Philosophie", href: "/philosophie" },
      { name: "Litterature", href: "/litterature" },
      { name: "Peinture", href: "/peinture" },
      { name: "Architecture", href: "/architecture" },
      { name: "Musique classique", href: "/musique-classique" },
      { name: "Jazz", href: "/jazz" },
      { name: "Photographie", href: "/photographie" },
      { name: "Cinema", href: "/cinema" },
      { name: "Arts decoratifs", href: "/arts-decoratifs" },
    ],
  },
  {
    name: "Societe",
    items: [
      { name: "Mouvements politiques", href: "/mouvements-politiques" },
      { name: "Democratie", href: "/democratie" },
      { name: "Droits civiques", href: "/droits-civiques" },
      { name: "Revolutions industrielles", href: "/revolutions-industrielles" },
      { name: "Economie", href: "/economie" },
      { name: "Monnaies & Banques", href: "/monnaies" },
      { name: "Psychologie", href: "/psychologie" },
    ],
  },
  {
    name: "Croyances",
    items: [
      { name: "Religions", href: "/religions" },
      { name: "Mythologies", href: "/mythologies" },
    ],
  },
];

// Flatten all items for search
const allItems = categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name }))
);

export function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        {/* Logo */}
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <span className="text-2xl">📚</span>
          </Link>
        </Button>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2">
                    <li>
                      {category.items.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link href={item.href}>{item.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search button */}
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 md:h-9 md:w-60 md:justify-start md:px-3 md:py-2"
          onClick={() => setOpen(true)}
        >
          <Search className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline-flex">Rechercher...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      {/* Command dialog for search */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Rechercher une timeline..." />
        <CommandList>
          <CommandEmpty>Aucun resultat.</CommandEmpty>
          {categories.map((category) => (
            <CommandGroup key={category.name} heading={category.name}>
              {category.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.name}
                  onSelect={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </header>
  );
}

