<h2 align="center">Opis zadania queryableDecorator </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz dekorator **queryable**, który doda do obiektu lub arraya metodę .query w której za pomocą składni pseudo SQL będzie można wybierać odpowiednie dane

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest decorator pattern - https://www.sitepoint.com/javascript-decorators-what-they-are/
- Podstawowe query w SQL dla zarysu zadania - http://lgatto.github.io/sql-ecology/01-sql-basic-queries.html

## Kawałek kodu dla lepszego początku!

```javascript
function queryalbe(input) {

}

// w przypadku obiektów powinna działać tak
const withSQLQuery = queryalbe({
    "key": 'value',
    'key1': 'value1'
})

const selected = withSQLQuery.query('where $value = "value"')
// selected == {"key":'value','key1':'value1'}

const selected1 = withSQLQuery.query('where $key = "key1"')
// selected == {'key1':'value1'}

// w przypadku arrayów z obiektami powinna działać tak
const withSQLQuery = queryalbe([{
    "key": 'value1'
}, {
    "key": 'value2'
}, {
    "key": 'val3'
}, {
    "key": 'v3'
}, {
    "key": 'val4'
}])

const selected = withSQLQuery.query('where $value = "value"')
// selected == [{"key": 'value1'}, {"key": 'value2'}]

// w przypadku arrayów z typami prostymi
const withSQLQuery = queryalbe([0,1,2,3,4,5])

const selected = withSQLQuery.query('where $value >= 2')
// selected == [2,3,4,5]
```
