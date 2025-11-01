"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { RankingHero } from "@/components/ranking-hero"
import { WalletChecker } from "@/components/wallet-checker"
import { Footer } from "@/components/footer"

export type Language = "en" | "zh" | "ja" | "vi"

export interface Translations {
  nav: {
    board: string
    createToken: string
    ranking: string
    advanced: string
    campaign: string
    bridge: string
    xMode: string
  }
  hero: {
    title: string
    lastUpdated: string
  }
  walletChecker: {
    description: string
    inputPlaceholder: string
    checkButton: string
    requirement1: string
    requirement2: string
  }
  footer: {
    description: string
    links: {
      about: string
      docs: string
      support: string
      terms: string
      privacy: string
    }
    copyright: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      board: "Board",
      createToken: "Create Token",
      ranking: "Ranking",
      advanced: "Advanced",
      campaign: "Campaign",
      bridge: "Bridge",
      xMode: "X Mode",
    },
    hero: {
      title: "FOUR MEME RANKING",
      lastUpdated: "The data was last updated at",
    },
    walletChecker: {
      description:
        "Enter your wallet address to check your allocation for the airdrop. Addresses must have succeeded a minimum of $50,000 transacted volume on the BNB chain.",
      inputPlaceholder: "Enter your wallet address",
      checkButton: "Check",
      requirement1: "Your wallet must have transactions on the BNB chain before 1/1/2020",
      requirement2: "Inactive wallets cannot receive an airdrop allocation",
    },
    footer: {
      description: "The First Meme Fair Launch Platform on BSC. PUMP TO THE FOURMEME.",
      links: {
        about: "About",
        docs: "Documentation",
        support: "Support",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
      },
      copyright: "© 2025 FOUR.MEME. All rights reserved.",
    },
  },
  zh: {
    nav: {
      board: "看板",
      createToken: "创建代币",
      ranking: "排名",
      advanced: "高级",
      campaign: "活动",
      bridge: "桥接",
      xMode: "X 模式",
    },
    hero: {
      title: "四个迷因排名",
      lastUpdated: "数据最后更新于",
    },
    walletChecker: {
      description: "输入您的钱包地址以检查空投分配。地址必须在 BNB 链上完成至少 50,000 美元的交易量。",
      inputPlaceholder: "输入您的钱包地址",
      checkButton: "检查",
      requirement1: "您的钱包必须在 2020 年 1 月 1 日之前在 BNB 链上有交易",
      requirement2: "不活跃的钱包无法获得空投分配",
    },
    footer: {
      description: "BSC 上第一个 Meme 公平启动平台。PUMP TO THE FOURMEME。",
      links: {
        about: "关于",
        docs: "文档",
        support: "支持",
        terms: "服务条款",
        privacy: "隐私政策",
      },
      copyright: "© 2025 FOUR.MEME. 版权所有。",
    },
  },
  ja: {
    nav: {
      board: "ボード",
      createToken: "トークン作成",
      ranking: "ランキング",
      advanced: "詳細",
      campaign: "キャンペーン",
      bridge: "ブリッジ",
      xMode: "Xモード",
    },
    hero: {
      title: "フォーミームランキング",
      lastUpdated: "データの最終更新日時",
    },
    walletChecker: {
      description:
        "ウォレットアドレスを入力してエアドロップの割り当てを確認してください。BNBチェーンで最低50,000ドルの取引量が必要です。",
      inputPlaceholder: "ウォレットアドレスを入力",
      checkButton: "確認",
      requirement1: "ウォレットは2020年1月1日以前にBNBチェーンで取引が必要です",
      requirement2: "非アクティブなウォレットはエアドロップ割り当てを受け取れません",
    },
    footer: {
      description: "BSC上の最初のMeme公正ローンチプラットフォーム。PUMP TO THE FOURMEME。",
      links: {
        about: "について",
        docs: "ドキュメント",
        support: "サポート",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
      },
      copyright: "© 2025 FOUR.MEME. 全著作権所有。",
    },
  },
  vi: {
    nav: {
      board: "Bảng",
      createToken: "Tạo Token",
      ranking: "Xếp hạng",
      advanced: "Nâng cao",
      campaign: "Chiến dịch",
      bridge: "Cầu nối",
      xMode: "Chế độ X",
    },
    hero: {
      title: "XẾP HẠNG FOUR MEME",
      lastUpdated: "Dữ liệu được cập nhật lần cuối vào",
    },
    walletChecker: {
      description:
        "Nhập địa chỉ ví của bạn để kiểm tra phân bổ airdrop. Địa chỉ phải có khối lượng giao dịch tối thiểu $50,000 trên chuỗi BNB.",
      inputPlaceholder: "Nhập địa chỉ ví của bạn",
      checkButton: "Kiểm tra",
      requirement1: "Ví của bạn phải có giao dịch trên chuỗi BNB trước ngày 1/1/2020",
      requirement2: "Ví không hoạt động không thể nhận phân bổ airdrop",
    },
    footer: {
      description: "Nền tảng ra mắt công bằng Meme đầu tiên trên BSC. PUMP TO THE FOURMEME.",
      links: {
        about: "Giới thiệu",
        docs: "Tài liệu",
        support: "Hỗ trợ",
        terms: "Điều khoản dịch vụ",
        privacy: "Chính sách bảo mật",
      },
      copyright: "© 2025 FOUR.MEME. Đã đăng ký bản quyền.",
    },
  },
}

export function RankingPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(false)
  const t = translations[language]

  return (
    <div className="relative min-h-screen bg-black text-white">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-[#a3ff12]" />
            <p className="text-lg text-zinc-300">Loading...</p>
          </div>
        </div>
      )}
      <Header language={language} setLanguage={setLanguage} translations={t} />
      <RankingHero translations={t} />
      <WalletChecker translations={t} setIsLoading={setIsLoading} />
      <Footer translations={t} />
    </div>
  )
}
