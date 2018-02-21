# node-adyen-encrypt
Adyen encryption for Node.js.

```
     const adyenEncrypt = require('node-adyen-encrypt');
     var adyenKey     =   "your key as retrieved from the Adyen Customer Area Web Service User page"; 
     var options = {}; // See adyen-encrypt.js for details
     var cardData = {
         number : cardNumber,       // 'xxxx xxxx xxxx xxxx'
         cvc : cvc,                 //'xxx'
         holderName : holderName,   // 'John Doe'
         expiryMonth : expiryMonth, //'MM'
         expiryYear : expiryYear,   // 'YYYY'
         generationtime : generationtime // new Date().toISOString()
     };
     var cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
     cseInstance.validate(cardData);
     var dataEncrypted = cseInstance.encrypt(cardData); 
```
