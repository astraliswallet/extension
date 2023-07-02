import React, { useState } from "react";
import {
  Flex,
  Button,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { BiSolidSend } from "react-icons/bi";
import { GiReceiveMoney, GiHamburgerMenu } from "react-icons/gi";
import { QRCodeSVG } from "qrcode.react";
import Sidebar from "../Components/Sidebar";
import SmallBtn from "../Components/SmallBtn";
import { useAtom } from "jotai";
import { walletAtom } from "../atoms";
function Main() {
  // The string you want to encode in the QR code
  const qrString = "Some string to encode in QR code";

  // State to control the drawer
  const [isOpen, setIsOpen] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [wallet, setWallet] = useAtom(walletAtom);
  const [isTopupOpen, setIsTopupOpen] = useState(false);
  const [TopupAmount, setTopupAmount] = useState("");

  // Handle Send Function
  const handleSend = (recipient, tokenType, amount) => {
    console.log(recipient, tokenType, amount);
    // PUT FUNCTION HERE
    //  Cleanup afterwards
    setAmount("");
    setRecipient("");
    setTokenType("");
  };

  // Handle Topup Function
  const handleTopup = () => {
    console.log(TopupAmount);
    setIsTopupOpen(false);
    // PUT FUNCTION HERE
    //  Cleanup afterwards
    setTopupAmount("");
  };

  // Handlers to open and close the drawer
  const handleOpen = () => setIsOpen(true);
  const onCloseReceive = () => setIsTopupOpen(false);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justify="center"
      px={6}
      py={2}
      h="100%"
      w="100%"
      gap="23px"
      fontFamily="Inter,italic"
      color="white"
      fontWeight={700}
      fontSize="20px"
      cursor={"pointer"}
    >
      <Flex h="150px" w="150px" justify="center" alignItems="center">
        <QRCodeSVG value={qrString} />
      </Flex>
      <IconButton
        icon={<GiHamburgerMenu />}
        onClick={handleOpen}
        position="absolute"
        top={5}
        right={5}
        bg="transparent"
        color="white"
        fontSize="30px"
      />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsTopupOpen={setIsTopupOpen}
      />
      <Text>
        <i>{wallet}</i>
      </Text>
      <Flex gap="12px">
        <SmallBtn
          bg="#C9EEFB"
          recipient={recipient}
          tokenType={tokenType}
          amount={amount}
          setRecipient={setRecipient}
          setTokenType={setTokenType}
          setAmount={setAmount}
          handleSend={handleSend}
        >
          <BiSolidSend fontSize="50px" />
        </SmallBtn>

        <SmallBtn bg="#E8DCF8">
          <GiReceiveMoney fontSize="50px" />
        </SmallBtn>
      </Flex>
      <Button
        fontFamily="Inter,italic"
        color="black"
        fontWeight={700}
        fontSize="17px"
        cursor={"pointer"}
        w="auto"
        p={2}
        h="auto"
        bg="#D9D9D9"
        borderRadius="6px"
        border="1px solid black"
        zIndex="2"
        transition="transform 0.3s ease-in-out"
        _hover={{
          bg: "#D9D9D9",
          borderColor: "black",
          transform: "scale(1.05)",
        }}
        _active={{ bg: "#D9D9D9", borderColor: "black" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => setIsTopupOpen(true)}
      >
        <i> Top Up Wallet</i>
      </Button>

      {/* Topup Wallet */}
      <Modal isOpen={isTopupOpen} onCloseReceive={onCloseReceive}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader>Topup Tokens</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                value={TopupAmount}
                onChange={(e) => setTopupAmount(e.target.value)}
                placeholder="Amount"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseReceive}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleTopup}>
              Topup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Main;
