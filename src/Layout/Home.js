import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletCreatedAtom, walletAtom } from "../atoms";
function Home() {
  const [walletCreated, setWalletCreated] = useAtom(walletCreatedAtom);
  const [wallet, setWallet] = useAtom(walletAtom);
  // Add createWallet function here
  const handleCreateWallet = () => {
    setWalletCreated(true);
    // generate key pair here
    // store key pair in walletAtom
    setWallet("Address");
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
