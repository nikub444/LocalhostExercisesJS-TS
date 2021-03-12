<h2 align="center">Opis zadania dynamicSwitch </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji 
* [ ] Klasa ma mieć metode .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jeśli warunek zostanie spełniony
* [ ] Klasa ma mieć metodę .isValid która iteruje po wszystkich .cases sprawdzając każdy dodany wcześniej warunek
* [ ] Metoda .isValid zwraca true jeśli wszystkie warunki będą na false, po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Brak

## Kawałek kodu dla lepszego początku!

```javascript
class Switch{
    cases = []
    conditions = []

    add(condition, callback){

    }
    isValid(){
        // return this.conditions
    }
}


// ma to działać tak:
const formChecker = new Switch()
const value = 'test'

formChecker.add(value.length < 5, ()=>{
    console.error('value is to short')
})

formChecker.add(!value.includes('@'), ()=>{
    console.error('value is not an email')
})

formChecker.isValid() // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.cases.length === 0
```
