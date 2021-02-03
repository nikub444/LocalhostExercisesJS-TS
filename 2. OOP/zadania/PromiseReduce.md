<h2 align="center">Opis zadania PromiseReduce </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wzorując się na działaniu metody Array.reduce, stwórz metodę, która będzie .reduce dla arraya promisów

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest i jak działa .reduce - https://thecodebarbarian.com/javascript-reduce-in-5-examples.html

## Kawałek kodu dla lepszego początku!

```javascript
function mentalReduceWrapper(list, callback, initialValue){
    return list.reduce(callback, initialValue)
}

function asyncReduce(listOfPromises, reduceCallback, initialValue){
    
}
// const arrayOfPromise = [promise.Resolve(1), promise.Resolve(2),promise.Resolve(3)]
// const result = asyncReduce(arrayOfPromise)
// result - 6
```
