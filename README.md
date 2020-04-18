<h1 align="center">Classic Adyen Client-Side Encryption (CSE) on Node </h1>

> A NodeJS helper to encrypt data with the Adyen CSE Version: 0_1_24

## Prerequisites:

You will need a `Adyen Key`

## Install

```sh
npm install node-adyen-encrypt
```

## Usage

```
     const adyenEncrypt = require('node-adyen-encrypt');

     const adyenKey     =   "your key as retrieved from the Adyen Customer Area Web Service User page";
     const options = {};
     const cardData = {
         number : cardNumber,       // 'xxxx xxxx xxxx xxxx'
         cvc : cvc,                 //'xxx'
         holderName : holderName,   // 'John Doe'
         expiryMonth : expiryMonth, //'MM'
         expiryYear : expiryYear,   // 'YYYY'
         generationtime : generationtime // new Date().toISOString()
     };
     const cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
     cseInstance.validate(cardData);
     const dataEncrypted = cseInstance.encrypt(cardData);
```

## Author

👤 **Danilo Pedrosa**

- Github: [@dmop](https://github.com/dmop)

## Show your support

Give a ⭐️ if this project helped you!
