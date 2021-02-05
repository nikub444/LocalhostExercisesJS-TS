<h2 align="center">Opis zadania filterWith </h2>

<br>

## Wymagana wiedza
- Podstawy Javascript
- Podstawy Typescript
 
## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

* [ ] Korzystając z funkcji .filter stwórz funkcje filterWith(array, filter), która ma umożliwić przeszukanie arraya z obiektami po wszystkich wartościach obiektu typu string lub number. Także po wartościach arraya w kluczu "tags" oraz po "name" w kluczu "friends". W kodzie poniżej znajdziesz dodatkowe wytyczne

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Array methods w JS - https://medium.com/quick-code/understanding-js-array-methods-which-can-make-programming-not-so-overwhelming-for-beginners-7afb5b4a0967
- Funkcja w JS - https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99?gi=43b26b329212
- Object w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript
## Kawałek kodu dla lepszego początku!

```javascript
const data = [
    {
      "_id": "5e985a07feddae7617ac44f6",
      "age": 24,
      "eyeColor": "brown",
      "name": "Cummings Baxter",
      "gender": "male",
      "company": "VELOS",
      "email": "cummingsbaxter@velos.com",
      "phone": "+1 (907) 482-2451",
      "tags": [
        "labore",
        "elit",
        "excepteur",
        "nisi",
        "mollit",
        "anim",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sheppard Jensen"
        }
      ]
    },
    {
      "_id": "5e985a0709dfa1e6fd93c6ad",
      "age": 32,
      "eyeColor": "brown",
      "name": "Madelyn Dickson",
      "gender": "female",
      "company": "KENGEN",
      "email": "madelyndickson@kengen.com",
      "phone": "+1 (984) 521-2439",
      "tags": [
        "nisi",
        "veniam",
        "dolore",
        "officia",
        "ex",
        "non",
        "pariatur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Bruce Barton"
        },
        {
          "id": 1,
          "name": "Juliet Schmidt"
        },
        {
          "id": 2,
          "name": "Horton Haley"
        },
        {
          "id": 3,
          "name": "Herminia Witt"
        }
      ]
    },
    {
      "_id": "5e985a0737e2306e9aef6ecd",
      "age": 26,
      "eyeColor": "blue",
      "name": "Mcguire Mercado",
      "gender": "male",
      "company": "LINGOAGE",
      "email": "mcguiremercado@lingoage.com",
      "phone": "+1 (963) 450-2194",
      "tags": [
        "cupidatat",
        "occaecat",
        "amet",
        "qui",
        "elit",
        "esse",
        "deserunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Loraine Harper"
        },
        {
          "id": 1,
          "name": "Luann Randall"
        },
        {
          "id": 2,
          "name": "Obrien Rich"
        },
        {
          "id": 3,
          "name": "Noble Wilkerson"
        }
      ]
    },
    {
      "_id": "5e985a07148cfba58c860ec2",
      "age": 26,
      "eyeColor": "brown",
      "name": "Marina Porter",
      "gender": "female",
      "company": "GORGANIC",
      "email": "marinaporter@gorganic.com",
      "phone": "+1 (867) 417-3497",
      "tags": [
        "laborum",
        "aliquip",
        "sit",
        "adipisicing",
        "aute",
        "cupidatat",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Blair Hill"
        },
        {
          "id": 1,
          "name": "Ebony Jimenez"
        }
      ]
    },
    {
      "_id": "5e985a074984f9f08ccaaa4c",
      "age": 25,
      "eyeColor": "green",
      "name": "Barlow Ferguson",
      "gender": "male",
      "company": "TOYLETRY",
      "email": "barlowferguson@toyletry.com",
      "phone": "+1 (837) 484-2231",
      "tags": [
        "est",
        "dolor",
        "minim",
        "ut",
        "anim",
        "culpa",
        "non"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Delacruz Acevedo"
        },
        {
          "id": 1,
          "name": "Gloria Tanner"
        },
        {
          "id": 2,
          "name": "Cantrell Myers"
        },
        {
          "id": 3,
          "name": "Fisher Leonard"
        }
      ]
    }
  ]
  
// tak aby:
// - od 0 do 2 znaków w filtrze zwracało pusty array, 
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie
  
  function filterWith(arr, filter){
    // ...
}
```