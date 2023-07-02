import React from "react";
import {
  Flex,
  Button,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { walletCreatedAtom } from "../atoms";
function Sidebar({ isOpen, setIsOpen, setIsTopupOpen }) {
  const [walletCreated, setWalletCreated] = useAtom(walletCreatedAtom);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleTopupClick = () => {
    setIsOpen(false);
    setIsTopupOpen(true);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={handleClose}
      size="139px"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <Flex
            h="100%"
            w="100%"
            justify="center"
            alignItems="center"
            direction="column"
            gap="23px"
          >
            <Box
              as="span"
              fontFamily="Inter,italic"
              color="#1E1E1E"
              fontWeight={700}
              fontSize="25px"
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                width: "0",
                height: "2px",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "#1E1E1E",
                transition: "width .5s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
              onClick={() => setWalletCreated(false)}
            >
              <i>BURN WALLET</i>
            </Box>
            <Box
              as="span"
              fontFamily="Inter,italic"
              color="#1E1E1E"
              fontWeight={700}
              fontSize="25px"
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                width: "0",
                height: "2px",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "#1E1E1E",
                transition: "width .5s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
            >
              <i>CHANGE PARENT</i>
            </Box>

            <Box
              as="span"
              fontFamily="Inter,italic"
              color="#1E1E1E"
              fontWeight={700}
              fontSize="25px"
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                width: "0",
                height: "2px",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "#1E1E1E",
                transition: "width .5s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
              onClick={handleTopupClick}
            >
              <i>TOP UP WALLET</i>
            </Box>
          </Flex>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Sidebar;
