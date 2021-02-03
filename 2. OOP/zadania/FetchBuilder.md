<h2 align="center">Opis zadania FetchBuilder </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming
- Asynchroniczność
- Znajomość REST API
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wytworzenie klase **Fetcher**, która będzie robić zapytania do **API**, poprzez wbudowanego **fetcha** według wzorca projektowego **Builder**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest builder - https://refactoring.guru/pl/design-patterns/builder
- Czym jest fetch i jak go używać - https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

## Kawałek kodu dla lepszego początku!

```javascript
class FetchBuilder{}

// ma to działać tak
const toSingleUserEndpointBuilder = new FetchBuilder()
const deleteManyUsersBuilder = new FetchBuilder()
const addNewUserBuilder = new FetchBuilder()

// ta składnia wykonuje fetch z odpowiednimi danymi
const toSingleUserEndpoint = toSingleUserEndpointBuilder
    .host('https://path.to.users.api.com')
    .port(3000)
    .route('api/v1/users')
    .method('GET')
    .param('id','1')
    .headers({
        'Content-Type': '...'
    })
    .build()

// toSingleUserEndpoint to funkcja zwracająca fetch z odpowiednimi danymi


// ta składnia wykonuje fetch z odpowiednimi danymi
const deleteManyUsersEndpoint = deleteManyUsersBuilder
    .host('https://path.to.users.api.com')
    .port(3000)
    .route('api/v1/users')
    .method('DELETE')
    .param('id','1')
    .param('id','2')
    .headers({
        'Content-Type': '...'
    })
    .build()


// ta składnia wykonuje fetch z odpowiednimi danymi
const addNewUserEndpoint = addNewUserBuilder
    .host('https://path.to.users.api.com')
    .port(3000)
    .route('api/v1/users')
    .method('POST')
    .data({
        name:'', surname:'', email: ''
    })
    .headers({
        'Content-Type': '...'
    })
    .build()
```
