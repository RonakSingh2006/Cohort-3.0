import * as ed from '@noble/ed25519';

(async () => {


  // const secretKey = ed.utils.randomSecretKey(); // bytes array
  // const publicKey = await ed.getPublicKeyAsync(secretKey);

  // we can get public key from private key but not vice-versa

  const { secretKey, publicKey } = await ed.keygenAsync();
  const message = new TextEncoder().encode('Hello World');
  const signature = await ed.signAsync(message, secretKey);
  const isValid = await ed.verifyAsync(signature, message, publicKey);

  console.log(isValid);
})();