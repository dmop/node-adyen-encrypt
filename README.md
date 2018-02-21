# node-adyen-encrypt
Adyen encryption for Node.js.

```
     const adyenEncrypt = require('node-adyen-encrypt');
     var adyenKey     =   "your key as retrieved from the Adyen Customer Area Web Service User page"; 
     var options = {}; // See adyen-encrypt.js for details
     var cardData = {
         number : cardNumber,
         cvc : cvc,
         holderName : holderName,
         expiryMonth : expiryMonth,
         expiryYear : expiryYear,
         generationtime : generationtime
     };
     var cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
     cseInstance.validate(cardData);
     var dataEncrypted = cseInstance.encrypt(cardData); 
```