"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Language, Translations } from "@/components/ranking-page"

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
}

const languageNames: Record<Language, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  vi: "Tiếng Việt",
}

export function Header({ language, setLanguage, translations }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div className="container mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo and nav */}
        <div className="flex items-center gap-12">
          <a className="block relative w-[120px] h-[40px]" href="/">
            <img
              alt="logo"
              src="/logo.svg"
              className="object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#"
              className="text-[17px] font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {translations.nav.board}
            </a>
            <a
              href="#"
              className="text-[17px] font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {translations.nav.createToken}
            </a>
            <a
              href="#"
              className="relative text-[17px] font-bold text-[#b4ff15] transition-colors hover:text-[#9ce800]"
            >
              {translations.nav.ranking}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#b4ff15] rounded-full" />
            </a>
            <a
              href="#"
              className="text-[17px] font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {translations.nav.advanced}
            </a>
            <a
              href="#"
              className="text-[17px] font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {translations.nav.campaign}
            </a>
            <a
              href="#"
              className="text-[17px] font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {translations.nav.bridge}
            </a>

            <Button
              variant="default"
              className="ml-2 bg-[#b4ff15] text-black text-[15px] font-semibold rounded-md px-5 py-2 hover:bg-[#9ce800] cursor-pointer"
            >
              {translations.nav.xMode}
            </Button>
          </nav>
        </div>

        {/* Language button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[15px] text-white font-medium hover:bg-white/20 transition-all"
            >
              <Globe className="h-[18px] w-[18px] text-white/90" />
              {languageNames[language]}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border border-zinc-700 bg-zinc-900 text-sm"
          >
            <DropdownMenuItem
              onClick={() => setLanguage("en")}
              className="cursor-pointer hover:bg-zinc-800"
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLanguage("zh")}
              className="cursor-pointer hover:bg-zinc-800"
            >
              中文
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLanguage("ja")}
              className="cursor-pointer hover:bg-zinc-800"
            >
              日本語
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLanguage("vi")}
              className="cursor-pointer hover:bg-zinc-800"
            >
              Tiếng Việt
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}