import Image from "next/image"
import type { Translations } from "@/components/ranking-page"

interface RankingHeroProps {
  translations: Translations
}

export function RankingHero({ translations }: RankingHeroProps) {
  const now = new Date()
  const formattedDate = now.toISOString().replace("T", " ").split(".")[0]

  return (
    <div className="relative my-5">
      {/* Centered content */}
      <div className="absolute top-2/3 left-1/2 z-[1] flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2">
        <div
          className="uppercase whitespace-nowrap font-bold text-2xl md:text-4xl lg:text-6xl text-transparent text-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(255, 244, 148) 0%, rgb(108, 255, 50) 97.66%)",
            WebkitBackgroundClip: "text",
          }}
        >
          JOIN MEME AIRDROP
        </div>

        <div className="text-gray-400 text-center text-xs md:text-sm font-medium">
          {translations.hero.lastUpdated}
          <br className="block sm:hidden" />
          {" "}{formattedDate} (UTC+0)
        </div>
      </div>

      {/* Desktop background */}
      <div className="hidden lg:block relative w-full aspect-[1440/194]">
        <Image
          alt="ranking background"
          src="/ranking-bg.png"
          fill
          sizes="1440px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Mobile background */}
      <div className="lg:hidden relative w-full aspect-[375/150]">
        <Image
          alt="ranking background mobile"
          src="/_next/static/media/ranking-bg-mobile.54a3c708.png"
          fill
          sizes="375px"
          className="object-cover"
          priority={false}
        />
      </div>
    </div>
  )
}