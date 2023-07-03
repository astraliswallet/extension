import Home from "./Layout/Home";
import Main from "./Layout/Main";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletCreatedAtom } from "./atoms";
import { useState } from "react";

function App() {
  const [walletCreated, setWalletCreated] = useAtom(walletCreatedAtom);

  return (
    <Flex bg="#1E1E1E" h="500px" w="400px">
      {walletCreated ? <Main /> : <Home />}
    </Flex>
  );
}

export default App;
