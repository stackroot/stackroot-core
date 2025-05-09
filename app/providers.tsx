'use client';

import type React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'StackRoot',
  projectId: process.env.NEXT_PUBLIC_REOWN_ID || 'default_project_id',
  chains: [
    sepolia
  ],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_URL)
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config} reconnectOnMount={true}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
