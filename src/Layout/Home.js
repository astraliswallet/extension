import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletCreatedAtom, walletAtom } from "../atoms";
const solanaWeb3 = require('@solana/web3.js');

function generateSolanaKeypair() {
  // Generate a new Solana keypair
  const keypair = solanaWeb3.Keypair.generate();

  // Get the public key and secret key from the keypair
  const publicKey = keypair.publicKey.toBase58();
  const privateKey = keypair.secretKey.toString('hex');

  return { publicKey, privateKey };
}

function Home() {
  const [walletCreated, setWalletCreated] = useAtom(walletCreatedAtom);
  const [wallet, setWallet] = useAtom(walletAtom);

  // Handle createWallet function here
  const handleCreateWallet = () => {
    // generate key pair here
    const keypairs = generateSolanaKeypair();
    const pubkey = keypairs.publicKey;
    const secretKey = keypairs.secretKey;

    setWallet(pubkey); // replace "Address" with the generated key pair
    setWalletCreated(true);
  };

  return (
    <Flex justify="center" alignItems="center" w="100%">
      <Button
        fontFamily="Inter,italic"
        color="white"
        fontWeight={700}
        fontSize="20px"
        cursor={"pointer"}
        w="auto"
        p={4}
        h="auto"
        bg="#7A6D66"
        borderRadius="0"
        border="1px solid black"
        zIndex="2"
        transition="transform 0.3s ease-in-out"
        _hover={{
          bg: "#7A6D66",
          borderColor: "black",
          transform: "scale(1.05)",
        }}
        _active={{ bg: "#7A6D66", borderColor: "black" }}
        _focus={{ boxShadow: "none" }}
        onClick={handleCreateWallet}
      >
        <i> CREATE WALLET</i>
      </Button>
    </Flex>
  );
}

export default Home;
