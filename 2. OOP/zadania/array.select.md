<h2 align="center">Custom array method - Array.select </h2>

<br>

## Wymagana wiedza

- Podstawy JS-a
- Podstawy Typescript

## Cele główne zadania

* [ ] Stwórz high order function Array.select w Typescript, którego działanie będzie podobne do defaultowego działania List w Pythonie

## Wytyczne dla zadania

```javascript
// const arr = [0,1,2,3,4,5,6,7,8,9]

arr.select(null,3,null) => [0,1,2]
arr.select(1,5,null) => [1,2,3,4]
arr.select(null,4,2) => [0,2,4]

arr.select(-5,null,null) => [5,6,7,8,9]
arr.select(null,-5,null) => [0,1,2,3,4]
arr.select(-2,-5,null) => [5,6,7]

Array.prototype.select = function(startIdx, endIdx, step=1){
    // return ...
}
```
