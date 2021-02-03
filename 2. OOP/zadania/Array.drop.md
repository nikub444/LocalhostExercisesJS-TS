<h2 align="center">Custom array method - Array.drop </h2>

<br>

## Wymagana wiedza

- Podstawy JS-a
- Podstawy Typescript

## Cele główne zadania

* [ ] Stwórz high order function Array.drop w Typescript, który będzie rozwiązywał poniższe problemy

## Wytyczne dla zadania

```javascript
const arr = [0,1,2,'test',3,'7',11,'test']

Array.prototype.drop = function(toDrop){
    // return ...
}

// która będzie mieć 3 działania:

// kiedy dostaje wartość inną niż funkcja to działa tak:
arr.drop(2) => [0,1,'test',3,'7',11,'test']
arr.drop('test') => [0,1,2,3,'7',11]

// gdy dostaję konstruktor wartości prymitywnych to działa tak:
arr.drop(Number) => [0,1,2,3,11]
arr.drop(String) => ['test','7','test']

// gdy dostaję funkcję to działa tak:
arr.drop((element, idx) => boolean ) 
})
```
