import Home from "./Layout/Home";
import Main from "./Layout/Main";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletCreatedAtom } from "./atoms";
import { useState } from "react";
import DepositPage from "./DepositPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [walletCreated, setWalletCreated] = useAtom(walletCreatedAtom);

  return (
    <Flex bg="#1E1E1E" h="600px" w="400px">
      {walletCreated ? <Main /> : <Home />}
      <Router>
        <Routes>
          <Route path="/deposit" element={<DepositPage />} />
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
