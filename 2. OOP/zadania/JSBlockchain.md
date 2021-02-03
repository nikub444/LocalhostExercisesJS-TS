<h2 align="center">Opis zadania JSBlockchain </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript
- Biblioetka szyfrująca crypto/bcrypt

## Cele główne

* [ ] Wykorzystaj crypto lub bcrypt do zbudowania klasy, która bdzie wykorzystywać schemat działania **Blockchain**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest blockchain - https://www.investopedia.com/terms/b/blockchain.asp
- Jak szyfrować i deszyfrowa z crypto - https://lollyrock.com/posts/nodejs-encryption/

## Kawałek kodu dla lepszego początku!

```javascript
// to Twoja klasa przetrzymująca bloki z informacjami - np dokładnie 40 stringów z lorem ipsum

class InformationBlock{
    // propsy
    // createdAt
    // hash
    // prevHash
    // informations

    // metody
    add(information){}
}

class BlockChain{
    // propsy
    // blocks

    // metody
    addNewBlock(block){}
    getLastBlock(){}
    addInformationToLastBlock(information){}
    checkChainValidity(){}
}
```
