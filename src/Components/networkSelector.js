import React from 'react';
import { Select, Box, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { devnetURL, testnetURL, mainnetURL } from '../constants';
import { networkRPCAtom } from '../atoms';

const NetworkSelector = () => {
  const [selectedAtom, setSelectedAtom] = useAtom(networkRPCAtom);

  const handleAtomChange = (event) => {
    setSelectedAtom(event.target.value);
  };

  return (
    <Box>
      <Text>Selected Atom: {selectedAtom}</Text>
      <Select value={selectedAtom} onChange={handleAtomChange} mt={4} w="200px">
        <option value={devnetURL}>Devnet</option>
        <option value={testnetURL}>Testnet</option>
        <option value={mainnetURL}>Mainnet</option>
      </Select>
    </Box>
  );
};

export default NetworkSelector;
