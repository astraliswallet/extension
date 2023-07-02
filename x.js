const solanaWeb3 = require('@solana/web3.js');

function generateSolanaKeypair() {
  // Generate a new Solana keypair
  const keypair = solanaWeb3.Keypair.generate();

  // Get the public key and secret key from the keypair
  const publicKey = keypair.publicKey.toBase58();
  const privateKey = keypair.secretKey.toString('hex');

  return { publicKey, privateKey };
}

// Usage example
const { publicKey, privateKey } = generateSolanaKeypair();
console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);
