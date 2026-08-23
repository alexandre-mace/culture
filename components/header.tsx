"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button, LinkButton } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button as AriaButton } from "react-aria-components";
import { Search, Shuffle, Brain, Star, Route } from "lucide-react";
import { navigationCategories, searchItems } from "@/lib/search-data";
import { stripAccents } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isToutPage = pathname === "/tout";

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

  // Desktop only header
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center px-4 gap-2">
        {/* Logo */}
        <LinkButton variant="ghost" size="icon" href="/" className="shrink-0">
          <span className="text-xl">📚</span>
        </LinkButton>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-1">
          {navigationCategories.map((category) => (
            <DropdownMenuTrigger key={category.name}>
              <AriaButton className="inline-flex h-8 items-center gap-1 rounded-md px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 aria-expanded:bg-accent">
                {category.name}
              </AriaButton>
              <DropdownMenu placement="bottom start" className="w-[200px]">
                {category.items.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    href={item.href}
                    textValue={item.name}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            </DropdownMenuTrigger>
          ))}
        </nav>

        {/* Toutes button */}
        <LinkButton
          variant={isToutPage ? "secondary" : "ghost"}
          size="sm"
          href="/tout"
          className="gap-1.5"
        >
              <Shuffle className="h-4 w-4" />
              Toutes
        </LinkButton>

        {/* Quiz button */}
        <LinkButton
          variant={pathname === "/quiz" ? "secondary" : "ghost"}
          size="sm"
          href="/quiz"
          className="gap-1.5"
        >
              <Brain className="h-4 w-4" />
              Quiz
        </LinkButton>

        {/* Parcours button */}
        <LinkButton
          variant={pathname.startsWith("/parcours") ? "secondary" : "ghost"}
          size="sm"
          href="/parcours"
          className="gap-1.5"
        >
              <Route className="h-4 w-4" />
              Parcours
        </LinkButton>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Favorites */}
        <LinkButton
          variant={pathname === "/favoris" ? "secondary" : "ghost"}
          size="icon"
          href="/favoris"
          className="h-8 w-8"
        >
              <Star className="h-4 w-4" />
        </LinkButton>

        {/* Search button */}
        <Button
          variant="outline"
          className="relative h-8 w-60 justify-start px-3 py-2"
          onPress={() => setOpen(true)}
        >
          <Search className="h-4 w-4 mr-2" />
          <span className="text-sm">Rechercher...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
            <span>⌘</span>K
          </kbd>
        </Button>

      </div>

      {/* Command dialog for search */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
        <CommandInput placeholder="Rechercher..." />
        <CommandList
          className="max-h-[400px]"
          renderEmptyState={() => (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Aucun résultat.
            </div>
          )}
        >
          <CommandGroup heading="Timelines">
            {navigationCategories.flatMap((cat) => cat.items).map((item) => (
              <CommandItem
                key={item.href}
                id={item.href}
                textValue={`timeline ${item.name} ${stripAccents(item.name)}`}
                onAction={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Personnes & Événements">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                id={item.href}
                textValue={`${item.name} ${item.category} ${item.movement} ${stripAccents(`${item.name} ${item.category} ${item.movement}`)}`}
                onAction={() => {
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
        </Command>
      </CommandDialog>
    </header>
  );
}
