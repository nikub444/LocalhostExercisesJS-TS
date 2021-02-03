<h2 align="center">Opis zadania ScrollObserver </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klasę ScrollObserver z metodami takimi jak zawiera pattern **Observera**
* [ ] ScrollObserver ma nasłuchiwać na globalnym **window.onscroll**
* [ ] ScrollObserver ma zamontować event onscroll po wywołaniu metody observe, oraz odpalać callback co wywołanie eventu **window.onscroll**
* [ ] W callbacku observe ma być zwracany obiekt z wartościami z window takimi jak - {scrollY, scrollX, outerHeight, outerWidth, innerHeight, innerWidth}
* [ ] ScrollObserver ma odmontować event onscroll po wywołaniu mentody **unobserve**

## Cele opcjonalne do wykonania

* [ ] Zastosuj mechanizm throttle na callbacku observera ustawiony na 100ms

## Przydatne linki

- Czym jest Observer pattern - https://medium.com/better-programming/the-observer-pattern-in-javascript-4f4e0b908d5e
- Czym jest obiekt window - https://stackoverflow.com/questions/10037145/some-help-understanding-window-object / https://www.bitdegree.org/learn/javascript-window

## Kawałek kodu dla lepszego początku!

```javascript
class ScrollObserver {
	constructor() {
        // ...
	}
	observe = (callback) => {
        // ...
	}
	unobserve = () => {
        // ...
	}
}
```
