"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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
import { Search, Shuffle, Sparkles } from "lucide-react";
import { useDiscoverOptional } from "@/components/discover-context";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { navigationCategories, searchItems } from "@/lib/search-data";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const discover = useDiscoverOptional();

  const isDiscoverPage = pathname === "/discover";

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

  // Mobile /discover: show compact controls bar
  if (isDiscoverPage && discover) {
    return (
      <header className="md:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-11 items-center px-3 gap-2">
          {/* Discover controls */}
          <Select
            value={discover.selectedCategory}
            onValueChange={discover.setSelectedCategory}
          >
            <SelectTrigger className="w-[140px] h-8 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <span className="flex items-center gap-2">
                  <span>🎲</span>
                  <span>Toutes</span>
                </span>
              </SelectItem>
              {discover.categories.map((cat) => (
                <SelectItem key={cat.name} value={cat.name}>
                  <span className="flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex-1" />
          <Button
            variant="ghost"
            size="icon"
            onClick={discover.reshuffle}
            className="h-8 w-8"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          <ThemeToggle className="h-8 w-8" />
        </div>
      </header>
    );
  }

  // Regular header - desktop only
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center px-4 gap-2">
        {/* Logo */}
        <Button variant="ghost" size="icon" asChild className="shrink-0">
          <Link href="/">
            <span className="text-xl">📚</span>
          </Link>
        </Button>

        {/* Navigation Menu */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navigationCategories.map((category) => (
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

        {/* Discover button or controls */}
        {isDiscoverPage && discover ? (
          <div className="flex items-center gap-2">
            <Select
              value={discover.selectedCategory}
              onValueChange={discover.setSelectedCategory}
            >
              <SelectTrigger className="w-[160px] h-8 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  <span className="flex items-center gap-2">
                    <span>🎲</span>
                    <span>Toutes catégories</span>
                  </span>
                </SelectItem>
                {discover.categories.map((cat) => (
                  <SelectItem key={cat.name} value={cat.name}>
                    <span className="flex items-center gap-2">
                      <span>{cat.emoji}</span>
                      <span>{cat.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={discover.reshuffle}
              className="h-8 w-8"
            >
              <Shuffle className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button variant="ghost" size="sm" asChild className="gap-1.5">
            <Link href="/discover">
              <Sparkles className="h-4 w-4" />
              Découvrir
            </Link>
          </Button>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search button */}
        <Button
          variant="outline"
          className="relative h-8 w-60 justify-start px-3 py-2"
          onClick={() => setOpen(true)}
        >
          <Search className="h-4 w-4 mr-2" />
          <span className="text-sm">Rechercher...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1 h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>

        <ThemeToggle className="h-8 w-8" />
      </div>

      {/* Command dialog for search */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Rechercher..." />
        <CommandList className="max-h-[400px]">
          <CommandEmpty>Aucun resultat.</CommandEmpty>
          <CommandGroup heading="Timelines">
            {navigationCategories.flatMap((cat) => cat.items).map((item) => (
              <CommandItem
                key={item.href}
                value={`timeline ${item.name}`}
                onSelect={() => {
                  router.push(item.href);
                  setOpen(false);
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
                  setOpen(false);
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
    </header>
  );
}

