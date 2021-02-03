<h2 align="center">Opis zadania DatePro </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Wszystko o Date - https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/

## Kawałek kodu dla lepszego początku!

```javascript
class DatePro{
    constructor(dateAsString, inputDateFormat='DD.MM.YYYY'){
        // ...
    }

    format(outputStringFormat='DD.MM.YYYY'){
        // ...
    }
}

// to powinno zadziałać:

const date1 = '23.03'
const formatDate1 = 'DD.MM'
const instance1 = new DatePro(date1, formatDate1)


const date2 = '03/23/20'
const formatDate2 = 'MM/DD/YY'
const instance2 = new DatePro(date2, formatDate2)


const date3 = '20-03-20'
const formatDate3 = 'DD-MM-YYYY'
const instance3 = new DatePro(date3, formatDate3)


instance1.format() // '23.03.2020'
instance2.format() // '23.03.2020'
instance3.format() // '23.03.2020'
```
