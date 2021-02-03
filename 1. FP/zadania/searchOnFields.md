<h2 align="center">Opis zadania searchOnFields </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
 
## Technologie potrzebne do zadania

- Typescript

## Cele główne

* [ ] Stwórz metodę **searchOnFields**, która spełnia poniższę warunki:
* [ ] Przeszukuje argument **data**, który jest arrayem zagnieżdzonych obiektów, jeśli argument **phrase** ma co najmniej 3 litery, zwracając wyniki alfabetycznie
* [ ] Przeszukuje we wszystkich polach w każdym obiekcie arraya, jeśli typ jest uwzględniony w argumencie **conditions**
* [ ] Metoda zwracać błąd w przypadku gdy **phrase** ma mniej niż 3 litery
* [ ] Metoda ma zwracać błąd w przypadku gdy **data** nie będzie typi array
* [ ] Metoda ma zwracać błąd w przypadku gdy **conditions** nie będzie zawierać typów prostych
* [ ] Metoda ma zwracać wyniki posortowane alfabetycznie
* [ ] Przetestuj przypadek w którym przeszukiwane są tylko pola typu **number**, następnie pola typu **string**

## Cele opcjonalne do wykonania

* [ ] Jeżeli użytkownik nie poda żadnego wartości do **conditions** to metoda poszukuje phrase bez względu na typ

## Przydatne linki

- Objecty w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript
- Array methods w JS - https://medium.com/quick-code/understanding-js-array-methods-which-can-make-programming-not-so-overwhelming-for-beginners-7afb5b4a0967

## Kawałek kodu dla lepszego początku!

```javascript
const stringsAndNumbers = ['string', 'number']

function searchOnFields(data, phrase, conditions = stringsAndNumbers) {
  // ...
}
```
