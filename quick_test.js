const { Connection, clusterApiUrl } = require("@solana/web3.js");
const { TOKEN_PROGRAM_ID } = require("@solana/spl-token");
const { programs } = require("@metaplex/js");

async function getMetadataPDA(mint, conn) {
  const tokenMetadata = programs.metadata.Metadata.findByOwner(
    conn, // connection
    mint, // mint
  );
  return tokenMetadata.data.symbol;
}

async function getTokenBalances() {
  const MY_WALLET_ADDRESS = "FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T";
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const accounts = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
    filters: [
      {
        dataSize: 165,
      },
      {
        memcmp: {
          offset: 32,
          bytes: MY_WALLET_ADDRESS,
        },
      },
    ],
  });

  // Iterate over the accounts and extract the token name and amount
  const tokenBalances = await Promise.all(
    accounts.map(async (account) => {
      const mintAddr = account.account.data.parsed.info.mint;
      let tokenName = await getMetadataPDA(mintAddr);
      const amount =
        account.account.data.parsed.info.tokenAmount.uiAmountString;
      return { tokenName, amount };
    })
  );

  console.log(tokenBalances);
}

getTokenBalances();
