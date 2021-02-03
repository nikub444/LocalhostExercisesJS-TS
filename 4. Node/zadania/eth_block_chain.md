<h2 align="center">Ethereum blockchain</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- biblioteka web3.js

## Cele główne

* [ ] Podłączenie się biblioteką web3.js do blockchain ethereum
* [ ] Zbudowanie funkcjonalności, która wylistuje ostatnie 10 bloków oraz wszystkie transakcje w nich zawarte

## Cele opcjonalne do wykonania

* [ ] Zrób autoryzacje użytkownika poprzez MetaMask

## Przydatne linki

- Czym są dane 'onChain'(nie jest to must have link) - https://masterthecrypto.com/guide-cryptocurrency-valuation-onchain-data/
- Świetna dokumentacja web3.js - https://web3js.readthedocs.io/en/v1.3.0/

## Kawałek kodu dla lepszego początku!

```javascript
import Web3 from 'web3'
import express from 'express'
const web3 = new Web3(url)
const router = express.Router();

router.get('/eth', (req,res) => {
  // ..... web3
})
```
