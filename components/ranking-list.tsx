import { Card } from "@/components/ui/card"
import type { Translations } from "@/components/ranking-page"

interface RankingListProps {
  translations: Translations
}

interface Token {
  rank: number
  name: string
  symbol: string
  image: string
  value: string
  badge?: string
}

const mockTokens: Token[] = [
  {
    rank: 1,
    name: "Conscious Token",
    symbol: "conscious.four",
    image: "/zebra-pattern-token.jpg",
    value: "$360.54M",
    badge: "🥇",
  },
  {
    rank: 2,
    name: "B",
    symbol: "b.four",
    image: "/yellow-dog-meme.jpg",
    value: "$195.93M",
    badge: "🥈",
  },
  {
    rank: 3,
    name: "币安人生",
    symbol: "币安人生",
    image: "/chinese-text-coin.jpg",
    value: "$186.39M",
    badge: "🥉",
  },
  {
    rank: 4,
    name: "AKEDO",
    symbol: "ake.four",
    image: "/purple-triangle-logo.jpg",
    value: "$145M",
    badge: "🪙",
  },
  {
    rank: 5,
    name: "4",
    symbol: "4",
    image: "/person-gesture.jpg",
    value: "$84.98M",
    badge: "🪙",
  },
  {
    rank: 6,
    name: "Creditlink",
    symbol: "cdl.four",
    image: "/blue-c-logo.jpg",
    value: "$72.77M",
    badge: "🪙",
  },
  {
    rank: 7,
    name: "quq",
    symbol: "quq",
    image: "/yellow-emoji-face.jpg",
    value: "$68.45M",
    badge: "🪙",
  },
  {
    rank: 8,
    name: "AICell",
    symbol: "aicell.four",
    image: "/purple-gradient-cell.jpg",
    value: "$50.13M",
    badge: "🪙",
  },
]

export function RankingList({ translations }: RankingListProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="border-zinc-800 bg-zinc-950">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">{translations.ranking.rank}</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">{translations.ranking.token}</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-zinc-400">{translations.ranking.value}</th>
              </tr>
            </thead>
            <tbody>
              {mockTokens.map((token) => (
                <tr key={token.rank} className="border-b border-zinc-800 transition-colors hover:bg-zinc-900">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{token.badge}</span>
                      <span className="text-lg font-medium text-zinc-400">{token.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={token.image || "/placeholder.svg"}
                          alt={token.name}
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#a3ff12]">
                          <span className="text-xs">🪙</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white">{token.name}</div>
                        <div className="text-sm text-zinc-500">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-lg font-semibold text-white">{token.value}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
