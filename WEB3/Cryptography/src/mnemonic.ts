import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import bs58 from "bs58";

const mnemonic = generateMnemonic(256);
console.log("Mnemonic:", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`;

  const derivedSeed = derivePath(
    path,
    seed.toString("hex")
  ).key;

  const { publicKey } = nacl.sign.keyPair.fromSeed(derivedSeed);

  console.log(`Account ${i}:`, bs58.encode(publicKey));
}
