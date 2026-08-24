"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button, LinkButton } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchTrigger } from "@/components/ui/search-trigger";
import { Search, Shuffle, Brain, Star, Route } from "lucide-react";
import { navigationCategories, searchItems } from "@/lib/search-data";
import { stripAccents } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isToutPage = pathname === "/tout";

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
            <DropdownMenu key={category.name}>
              <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1 rounded-md px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 aria-expanded:bg-accent">
                {category.name}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="start"
                className="w-[200px]"
              >
                {category.items.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    render={<Link href={item.href} />}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
        <SearchTrigger onOpen={() => setOpen(true)} className="w-60" />

      </div>

      {/* Command dialog for search */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
        <CommandInput placeholder="Rechercher..." />
        <CommandList className="max-h-[400px]">
          <CommandEmpty>
            <div className="py-6 text-center text-sm text-muted-foreground">
              Aucun résultat.
            </div>
          </CommandEmpty>
          <CommandGroup heading="Timelines">
            {navigationCategories.flatMap((cat) => cat.items).map((item) => (
              <CommandItem
                key={item.href}
                value={`timeline ${item.name} ${stripAccents(item.name)}`}
                onSelect={() => {
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
                value={`${item.name} ${item.category} ${item.movement} ${stripAccents(`${item.name} ${item.category} ${item.movement}`)}`}
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
        </Command>
      </CommandDialog>
    </header>
  );
}
