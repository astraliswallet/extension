import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletAtom } from "../atoms";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SmallBtn({
  children,
  bg,
  setRecipient,
  setTokenType,
  setAmount,
  recipient,
  tokenType,
  amount,
  handleSend,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };

  const [wallet, setWallet] = useAtom(walletAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [receiveOpen, setReceiveOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onReceiveOpen = () => setReceiveOpen(true);
  const onReceiveClose = () => setReceiveOpen(false);

  const handleBtnClick = () => {
    if (bg == "#C9EEFB") {
      setIsOpen(true);
    } else {
      setReceiveOpen(true);
    }
  };
  const handleSubmit = () => {
    handleSend(recipient, tokenType, amount);
    onClose();
  };

  return (
    <>
      <Button
        p={2}
        fontFamily="Inter,italic"
        color="black"
        fontWeight={700}
        fontSize="20px"
        cursor={"pointer"}
        h="50px"
        w="50px"
        bg={bg}
        borderRadius="6px"
        border="1px solid black"
        zIndex="2"
        transition="transform 0.3s ease-in-out"
        _hover={{
          bg: bg,
          borderColor: "black",
          transform: "scale(1.05)",
        }}
        _active={{ bg: bg, borderColor: "black" }}
        _focus={{ boxShadow: "none" }}
        onClick={handleBtnClick}
      >
        {children}
      </Button>
      {/* Send  */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader>Send Tokens</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Recipient</FormLabel>
              <Input
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Recipient"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Token Type</FormLabel>
              <Input
                value={tokenType}
                onChange={(e) => setTokenType(e.target.value)}
                placeholder="Token Type"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSubmit}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Recieve Wallet */}
      <Modal isOpen={receiveOpen} onClose={onReceiveClose}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader>Receive Tokens</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{wallet}</FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <CopyToClipboard text={wallet} onCopy={handleCopy}>
              <Button colorScheme="blue" mr={3}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </CopyToClipboard>
            <Button colorScheme="blue" mr={3} onClick={onReceiveClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SmallBtn;
