"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Connector, useConnect } from 'wagmi';


export function ConnectOptions() {
  const { connectors, connect } = useConnect();
  const [availableConnectors, setAvailableConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    const detectAvailableConnectors = async () => {
      const checks = await Promise.all(
        connectors.map(async (connector) => {
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
      setAvailableConnectors(checks.filter(Boolean) as Connector[]);
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
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 mx-2 flex"
    >
      Connect with 
            <Image
                src={`/icons/${connector.name}.svg`}
                alt={connector.name}
                width={20}
                height={20}
                className="inline-block ml-2 mr-1 fill-white text-white"
            />
    </button>
  );
}
