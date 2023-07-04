import React, { useEffect, useState } from 'react';
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Deposit = () => {
  const wallet = useWallet();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (wallet.connected) {
      setConnected(true);
    }
  }, [wallet.connected]);

  const depositSol = async () => {
    if (!connected) {
      return; // Wallet not connected
    }

    const connection = new Connection('https://api.mainnet-beta.solana.com'); // Replace with desired Solana network

    const walletPublicKey = wallet.publicKey?.toBase58();
    if (!walletPublicKey) {
      return; // Public key not available
    }

    const destinationAddress = 'ENTER_DESTINATION_ADDRESS_HERE'; // Replace with the desired destination wallet address
    const amount = 1; // Replace with the desired amount of SOL to transfer

    const transaction = new Transaction().add(
      // Transfer instruction
      SystemProgram.transfer({
        fromPubkey: new PublicKey(walletPublicKey),
        toPubkey: new PublicKey(destinationAddress),
        lamports: amount * 10 ** 9, // Convert amount from SOL to lamports
      })
    );

    try {
      await sendAndConfirmTransaction(connection, transaction, [wallet.signer]);
      console.log('Transfer successful!'); // Transfer completed
    } catch (error) {
      console.error('Transfer failed:', error); // Transfer failed
    }
  };

  return (
    <div>
      <h2>Deposit SOL</h2>
      <WalletMultiButton />
      {connected && (
        <button onClick={depositSol}>Deposit</button>
      )}
    </div>
  );
};

export default Deposit;
