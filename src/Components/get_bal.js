import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

function BalanceDisplay({ publicKey }) {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const clusterApiUrl = "https://api.testnet.solana.com";
    const connection = new Connection(clusterApiUrl);

    const fetchBalance = async () => {
      try {
        const balance = await connection.getBalance(new PublicKey(publicKey));
        setBalance(balance);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBalance();
  }, [publicKey]);

  return (
    <div>
      {balance !== null ? (
        <p>
          Balance for {publicKey}: {balance}
        </p>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
}

export default BalanceDisplay;
