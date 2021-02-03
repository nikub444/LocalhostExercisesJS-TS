<h2 align="center">Opis zadania InteligentObject </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wykorzystując wbudowaną klasę **Proxy** zbuduj IntelligentObject, który będzie "wiedział", że zmieniają się wartości jego kluczy i będzie emitował zmiany do metody **.onChange**
* [ ] IntelligentObject **nie powinien** pozwalać tworzyć nowych kluczy poza tymi podanymi w argumencie constructora

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest Proxy - https://blog.bitsrc.io/a-practical-guide-to-es6-proxy-229079c3c2f0?gi=9b934c9a350d

## Kawałek kodu dla lepszego początku!

```javascript
const user = new IntelligentObject({
    name:'John',
    surname:'Doe'
})

// to wywoła error, że nie można dodać nowych kluczy
user.email = 'john.doe@gmail.com'

// to wywoła metodę .onChange z odpowiednimi wartościami
user.name = 'Johnny'

user.onChange(({key, prevValue, nextValue, timestamp})=>{
    // key - który klucz zmienia wartość
    // prevValue - wartość z której się zmienai
    // nextValue - wartość na którą się zmienia
    // timestamp - timestamp zmiany w milisekundach 

    // metoda onChange nie powinna się wywoływac jeśli prevValue === nextValue
})
```
