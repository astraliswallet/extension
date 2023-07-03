import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useAtom } from "jotai";
import { Button } from "@chakra-ui/react";
import { networkRPCAtom, walletAtom } from "../atoms";


const GetSPLbalance = () => {
//   const [wallet] = useAtom(walletAtom);
//   const [networkRPC] = useAtom(networkRPCAtom);

//   async function getTokenAccounts() {
//     const solanaConnection = new Connection(networkRPC, "confirmed");
//     const filters = [
//       {
//         dataSize: 165, //size of account (bytes)
//       },
//       {
//         memcmp: {
//           offset: 32, //location of our query in the account (bytes)
//           bytes: wallet, //our search criteria, a base58 encoded string
//         },
//       },
//     ];

//     const accounts = await solanaConnection.getParsedProgramAccounts(
//       TOKEN_PROGRAM_ID, //SPL Token Program, new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
//       { filters: filters }
//     );

//     return accounts;
//   }
return null;
};

export default GetSPLbalance;
