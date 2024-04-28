'use client';
import React from 'react';
import WagmiProvider from './wagmi';
import { ChakraProviders } from './chakra';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <ChakraProviders>
        <WagmiProvider>{children}</WagmiProvider>
      </ChakraProviders>
    </div>
  );
};

export default RootProvider;
