import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// "Époques" -> "Epoques", so search matches with or without accents
export function stripAccents(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
