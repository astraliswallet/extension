/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useAtom } from "jotai";
import { Connection, PublicKey, Account, Transaction, SystemProgram } from "@solana/web3.js";
import { privateKeyAtom, networkRPCAtom } from "../atoms";
import { Strategy } from "@solana/spl-token-registry";

async function SendSol(amount, to) {
  try {
    const [senderPrivateKey] = useAtom(privateKeyAtom);
    const [networkRPC] = useAtom(networkRPCAtom);
    const connection = new Connection(networkRPC);
    const version = await connection.getVersion();
    console.log("Connection to cluster established:", networkRPC, version);

    // Creating sender's account keypair from the private key
    const senderAccount = new Account(senderPrivateKey);
    console.log("Sending from:" + senderAccount.publicKey.toBase58());

    // Getting the public key of the recipient's address
    const recipientPublicKey = new PublicKey(to);
    console.log("Sending to:" + recipientPublicKey.toBase58());

    // Constructing and signing the transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderAccount.publicKey,
        toPubkey: recipientPublicKey,
        lamports: amount * 10 ** 9, // Solana uses lamports (1 SOL = 1e9 lamports)
      })
    );

    console.log("Sending:", amount, " SOL");

    // Setting the recent blockhash and sender's account as the fee payer
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.addSignature(senderAccount);
    console.log("Transaction signed, submitting transaction");

    // Specifying the sender's account as the fee payer
    transaction.feePayer = senderAccount.publicKey;

    // Signing the transaction
    transaction.sign(senderAccount);
    console.log("Transaction signed, submitting transaction");

    // Sending the transaction to the network
    const transactionSignature = await connection.sendRawTransaction(
      transaction.serialize()
    );

    // Confirming the transaction
    await connection.confirmTransaction(transactionSignature);

    console.log(`Transaction ${transactionSignature} confirmed.`);
  } catch (error) {
    console.error("Error occurred while sending SOL:", error);
  }
}

export default SendSol;