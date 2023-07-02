import React, { useState } from "react";
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
function ModalComponent({
  setRecipient,
  setTokenType,
  setAmount,
  recipient,
  tokenType,
  amount,
}) {

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <Modal isOpen={onOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
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
          <Button variant="ghost">Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
