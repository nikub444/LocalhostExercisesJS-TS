<h2 align="center">Opis zadania FetchProxy </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
- Znajomość REST API
- Asynchroniczność
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Zbuduj customową klasę **ApiHandler** wykorzystującą fetcha
* [ ] Wykorzystując wbudowana w JS klasę **Proxy** stwórz instancje klasy **ApiHandler**, która pozwoli logować request/response body oraz request url params z każdego zapytania na metodę **POST** I **GET** oraz zablokuje wykonanie wszystkich requestów z metodą **DELETE**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest Proxy - https://blog.bitsrc.io/a-practical-guide-to-es6-proxy-229079c3c2f0?gi=9b934c9a350d

## Kawałek kodu dla lepszego początku!

```javascript
class ApiHandler{
    request(url, {
        method, body, headers, 
    }){
        // code here
    }
}
```
