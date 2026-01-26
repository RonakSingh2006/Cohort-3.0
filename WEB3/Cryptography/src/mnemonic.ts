import {generateMnemonic , mnemonicToSeedSync} from "bip39"

import bs58 from "bs58";

const words = generateMnemonic(256);

console.log(words);

const seed = mnemonicToSeedSync(words);

console.log(bs58.encode(seed));