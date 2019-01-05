var crypto = require('crypto')

/**
 * Generates a 256 bit (32 byte) AES encryption key and prints the base64
 * representation.
 *
 * @returns {string} The encryption key.
 */
module.exports.generateEncryptionKey = () => {
  const buffer = crypto.randomBytes(32);
  const encodedKey = buffer.toString('base64');

  console.log(`Base 64 encoded encryption key: ${encodedKey}`);

  return encodedKey;
}
