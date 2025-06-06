// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { Footer } from 'components/Footer';
import { TreeBubble } from 'components/treebubble';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className="main-container font-quicksand">
         <h1 className="main-title">
        <span className="title-line" id="colorH">MINT YOUR PUFF DOG (PUFF) NFT BEFORE THEY’RE GONE</span>
        <span className="title-line" id="colorH2">Rare NFTs. Real Rewards. Limited Supply.</span>
      </h1>

      <p className="subtitle"  id="colorH3">
        Minting may take a moment — hang tight while the blockchain does its thing. These rare NFTs won’t last long, so claim yours now!
      </p>
      <TreeBubble />
    </div>
  );
};
