import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { networkRPCAtom, walletAtom } from "../atoms";
import { useAtom } from "jotai";

function convertLamportToSol(lamport) {
  const lamportToSolConversionRate = 1e9; // 1 SOL = 10^9 Lamports
  const sol = lamport / lamportToSolConversionRate;
  return sol;
}

async function getBalance(networkRPC, wallet) {
  const connection = new Connection(networkRPC);
  const pubKey = new PublicKey(wallet);
  const balance = await connection.getBalance(pubKey);
  return balance;
}

function Userbalance() {
  const [networkRPC] = useAtom(networkRPCAtom);
  const [wallet] = useAtom(walletAtom);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getBalance(networkRPC, wallet);
      setBalance(balance);
    };

    fetchBalance();

    const interval = setInterval(() => {
      fetchBalance();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [networkRPC, wallet]);

  return <div>{convertLamportToSol(balance)}</div>;
}


export default Userbalance;
