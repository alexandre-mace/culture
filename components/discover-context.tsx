"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

interface Category {
  name: string;
  emoji: string;
}

interface DiscoverContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  shuffleKey: number;
  reshuffle: () => void;
}

const DiscoverContext = createContext<DiscoverContextType | null>(null);

export function DiscoverProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [shuffleKey, setShuffleKey] = useState(0);

  const reshuffle = () => setShuffleKey((k) => k + 1);

  const value = useMemo(
    () => ({
      selectedCategory,
      setSelectedCategory,
      categories,
      setCategories,
      shuffleKey,
      reshuffle,
    }),
    [selectedCategory, categories, shuffleKey]
  );

  return (
    <DiscoverContext.Provider value={value}>
      {children}
    </DiscoverContext.Provider>
  );
}

export function useDiscover() {
  const context = useContext(DiscoverContext);
  if (!context) {
    throw new Error("useDiscover must be used within DiscoverProvider");
  }
  return context;
}

export function useDiscoverOptional() {
  return useContext(DiscoverContext);
}
