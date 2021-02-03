<h2 align="center">Opis zadania UserActionObserver </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz observera, który będzie nasłuchiwać na wszystkie ```<a></a>``` i ```<button></button>``` dostępne w tagu ```<body></body>```
* [ ] Po wykonaniu kliknięcia - observer pozwoli na wykonanie callbacka dla klikniętego elementu
* [ ] Po wykonaniu kliknięcia - observer będzie wiedział kiedy kliknięcie jest linkiem na podstronę lub na link z zewnątrz, jeśli to wystąpi to w callbacku redirect będzie true
* [ ] Po wykonaniu kliknięcia - observer będzie wiedział kiedy kliknięcie nie spowoduje przekierowania, tylko np otworzenie modala lub link do #id, jeśli to wystąpi to w callbacku redirect będzie false

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest Observer pattern - https://medium.com/better-programming/the-observer-pattern-in-javascript-4f4e0b908d5e

## Kawałek kodu dla lepszego początku!

```javascript
const callback = ({element, redirect})=>{
    console.log(element.innerHTML, redirect)
}

class UserActionObserver {
    constructor(options){
        this.entries = []
    }
    observe = (target)=>{

    }
    unobserve = (target)=>{
       
    }
    notifyAll = (callback)=>{
        
    }
}
```
