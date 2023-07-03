import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useAtom } from "jotai";
import { walletAtom, networkRPCAtom } from "../atoms";

function GetUSDCBalance() {
  const [url, setUrl] = useAtom(networkRPCAtom);
  const [wallet, setWallet] = useAtom(walletAtom);
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const USDC_MINT = new PublicKey(
    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
  );
  const [ataBalance, setAtaBalance] = useState(0);

  useEffect(() => {
    getAtaBalance();
  }, []);

  const getAtaBalance = async () => {
    try {
      const publicKey = new PublicKey(wallet);

      const ata = await Token.getAssociatedTokenAddress(
        TOKEN_PROGRAM_ID,
        USDC_MINT,
        publicKey
      );

      const accountData = await connection.getAccountInfo(ata);

      if (accountData) {
        const balance = accountData.amount.toNumber();
        setAtaBalance(balance);
      }
    } catch (error) {
      console.error("Error fetching ATA balance:", error);
    }
  };

  return (
    <div>
      <h2>ATA Balance: {ataBalance}</h2>
    </div>
  );
}

export default GetUSDCBalance;
