"use client";

import { Account } from "@/components/Account";
import { ConnectOptions } from "@/components/Connect";

import { useAccount } from "wagmi";


function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <ConnectOptions />
}

export default function WalletPage() {
    return (
        <div className=" max-w-7xl mx-auto px-4 md:px-8 py-16 bg-neutral-50 rounded-xl shadow-lg scroll-mt-24 text-white bg-gradient-to-b from-sky-800 to-sky-300">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-root mb-6">Connect Your Wallet</h2>
                <p className="mb-4">
                    Connect your wallet to interact with the dApp.
                </p>
                <ConnectWallet />
            </div>
        </div>
    );
}   