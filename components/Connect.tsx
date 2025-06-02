"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Connector, useConnect } from 'wagmi';
import { Button } from '@/components/ui/button';

export function ConnectOptions() {
  const { connectors, connect } = useConnect();
  const [availableConnectors, setAvailableConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    const detectAvailableConnectors = async () => {
      const wallets = ['metaMask', 'injected', 'walletConnect'];
      const ordered = wallets
        .map((id) => connectors.find((c) => c.id === id))
        .filter(Boolean) as Connector[];

      const checks = await Promise.all(
        ordered.map(async (connector) => {
          try {
            const provider = await connector.getProvider();
            const isAvailable =
              connector.id === 'walletConnect' || !!provider;
            return isAvailable ? connector : null;
          } catch {
            return connector.id === 'walletConnect' ? connector : null;
          }
        })
      );

      const firstAvailable = checks.find(Boolean);
      setAvailableConnectors(firstAvailable ? [firstAvailable] : []);
    };

    detectAvailableConnectors();
  }, [connectors]);

  return (
    <div className="space-y-2">
      {availableConnectors.map((connector) => (
        <ConnectOption
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector })}
        />
      ))}
    </div>
  );
}

function ConnectOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}

    >
      Connect with
      <Image
        src={`/icons/${connector.name}.svg`}
        alt={connector.name}
        width={20}
        height={20}
        className="inline-block ml-2 mr-1 fill-white text-white"
      />
    </Button>
  );
}
