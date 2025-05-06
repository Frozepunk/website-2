// AES Decryption function
function aesDecrypt(encryptedText, secretKey = "HackerSecretKey") {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }
  
  // Get the encrypted text from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const encryptedText = urlParams.get('encryptedText');
  
  if (encryptedText) {
    console.log("Encrypted Text: ", encryptedText); // Debug log
    const decryptedMessage = aesDecrypt(encryptedText);
    console.log("Decrypted Message: ", decryptedMessage); // Debug log
  
    if (decryptedMessage) {
      document.getElementById('decryptedText').textContent = decryptedMessage;
    } else {
      document.getElementById('decryptedText').textContent = 'Failed to decrypt the message.';
    }
  } else {
    document.getElementById('decryptedText').textContent = 'No encrypted text provided.';
  }  