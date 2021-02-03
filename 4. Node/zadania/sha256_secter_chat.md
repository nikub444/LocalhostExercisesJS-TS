<h2 align="center">Opis zadania aplikacji al'a messanger</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
- Podstawowa znajomość jednej z niżej wymienionych baz danych.
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- Socket.io.
- mongoDB lub postgreSQL(ew mySQL).
- biblioteka szyfrująca bcrypt/crypto.

## Cele główne

* [ ] Użytkownik w tej aplikacji, będzie mógł rozmawiać z innymi użytkownikami na chacie działającym real-time o oparciu o socket.io
* [ ] Utworzenie funkcjonalności szyfrującej wiadomości po stronie klienta.
* [ ] Wysyłanie zaszyfrowanych wiadomości do drugiego użytkownika.
* [ ] Deszyfrowanie wiadomości po stronie klienta(po kliknięciu na wiadomość)

## Cele opcjonalne do wykonania

* [ ] Wysyłający po wysłaniu wiadomości ma widzieć status wiadomości i datę odczytania(wysłane/odczytane) tak jak to jest w przypadku messengera.
* [ ] Wytworzenie i podłączenie się do bazy aby przechowywać wiadomości(archwizowanie historii wiadomości).

## Przydatne linki

- Przykładowa apka dla zarysu(express + socket.io) - https://www.youtube.com/watch?v=jD7FnbI76Hg&t=2521s
- Czym jest i jak działa socket.io - https://www.ably.io/topic/socketio
- Jak działa i czym jest kryptografia(opis crypto) - https://www.youtube.com/watch?v=heldAl8Cfr4&t=151s
- Dodatkowe źródło uzupełniające kodowanie i dekodowanie wiadomości - https://lollyrock.com/posts/nodejs-encryption/

## Kawałek kodu dla lepszego początku!

```javascript
import io from 'socket.io'
import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

io.on('connection', socket => {
  console.log("zostałeś połaczony")
}
```
