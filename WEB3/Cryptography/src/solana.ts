import {
  generateKeyPair,
  signBytes,
  verifySignature
} from "@solana/kit";

import bs58 from 'bs58';

const keys = await generateKeyPair();

const message = new TextEncoder().encode("Hello");

const signature = await signBytes(keys.privateKey, message);

const verified = await verifySignature(
  keys.publicKey,
  signature,
  message
);

console.log("Verified:", verified);

const raw = await crypto.subtle.exportKey("raw", keys.publicKey);
const publicKeyBytes = new Uint8Array(raw);

const address = bs58.encode(publicKeyBytes);

console.log("Address:", address);
