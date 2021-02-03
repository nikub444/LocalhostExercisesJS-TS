<h2 align="center">CRUDL(create,read,update,delete) za pomocą REST i GraphQL</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- GraphQL
- mongoDB lub postgreSQL(ew mySQL).

## Cele główne

* [ ] Zbudowanie funkcjonalności, która będzie miała za zadanie tworzyć, odczytywać, updatować, usuwać i wylistować userów z bazy danych.
* [ ] Każda z funkcjonalności ma być serwowana za pomocą REST API.
* [ ] Każda z funkcjonalności ma być serwowana za pomocą GraphQL.

## Cele opcjonalne do wykonania

- Brak

## Przydatne linki

- Świetnie wyjaśnione działanie REST API - https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
- Czym jest protocół HTTP po Polsku! - https://www.samouczekprogramisty.pl/protokol-http/ 
- Jakie rozróżniamy HTTP status code - https://www.restapitutorial.com/httpstatuscodes.html
- Wprowadzenie do GraphQL - https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/

## Kawałek kodu dla lepszego początku!

```javascript
// REST API przykład 
router.get('/list', (req,res) => {

 .... tutaj logika opierająca się na współpracy z bazą danych

})

//GraphlQL przykład 
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({}) .... tutaj logika jak wyżej
})
```
