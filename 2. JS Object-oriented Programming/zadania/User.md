<h2 align="center">Opis zadania User </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klasę dla struktury danych związanych z użytkownikiem(wytyczne w kodzie poniżej)
* [ ] Klasa ma mieć możliwość zmiany adresu email
* [ ] Stwórz klasę dla struktury danych związanych z administratorem, Klasa ma dziedziczyć po klasie User wszystkie informacje i metody
* [ ] Klasa ma mieć poziom dostępu = "admin" oraz umożliwiać zmianę poziomu dostępu dla innego User i zmianę hasła dla innego Usera

## Cele opcjonalne do wykonania

* [ ] Stwórz klase pomocniczną Validator, która będzie posiadała metody statyczne odpowiedzalne za walidacje usera. Jeżeli któraś z walidacji się nie powiedzie, instancja ma nie być tworzona, tylko ma zwracać error z odpowiednim komunikatem o niepowiedzionej walidacji. W razie problmeów przy tworzeniu klasy validator, polecam zapoznać się z dokumentacja biblioteki is.js.
* [ ] Validator ma być napisany we wzorcu **Singleton** 

## Przydatne linki

- Świetna dokumentacja is.js - https://github.com/arasatasaygin/is.js
- Czym jest design pattern "Singleton" - https://refactoring.guru/pl/design-patterns/singleton

## Kawałek kodu dla lepszego początku!

```javascript
// Podczas walidacji upewnij się, że:
// - email jest poprawnym emailem				
// - hasło ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny				
// - płeć musi być ze zbioru [male, female]				
// - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY				
// - imię i nazwisko musi być niepuste

class User{
 imię
 nazwisko
 datę urodzenia
 hasło
 płeć
 adres email
 poziom dostępu = "user")
}

class Administrator{

}
```
