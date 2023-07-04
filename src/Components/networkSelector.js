import React from 'react';
import { Select, Box, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import {  testnetURL } from '../constants';
import { networkRPCAtom } from '../atoms';

const NetworkSelector = () => {
  const [selectedAtom, setSelectedAtom] = useAtom(networkRPCAtom);

  const handleAtomChange = (event) => {
    setSelectedAtom(event.target.value);
  };

  return (
    <Box>
      <Select value={selectedAtom} onChange={handleAtomChange} mt={4} w="200px">
        <option value={testnetURL}>Devnet</option>
      </Select>
    </Box>
  );
};

export default NetworkSelector;