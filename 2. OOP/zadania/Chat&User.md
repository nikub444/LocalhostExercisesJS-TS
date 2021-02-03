<h2 align="center">Opis zadania Chat&User </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
- Znajomość zasad SOLID
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Wypracowanie klasy **ChatRoom**, informacje o strukturze znajdują się poniżej w kodzie
* [ ] Wypracowanie klasy **User**, informacje o strukturze znajdują się poniżej w kodzie
* [ ] Wypracowanie klasy **SuperUser**, informacje o strukturze znajdują się poniżej w kodzie

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym są zasady SOLID - https://levelup.gitconnected.com/javascript-clean-code-solid-9d135f824180
- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/

## Kawałek kodu dla lepszego początku!

```javascript
// ChatRoom, który reprezentuje pokój na czacie
class ChatRoom {
  // uuid
  // nazwę
  // opis
  // lista rozmówców - nicki userów mają być unikalne, room ma mieć ograniczoną liczbę userów, może być tylko jeden admin na pokoju.
  // lista zbanowanych nicków - przy zbanowanej osobie ma znaleźć się również nick admina który go zbanował
  // lista wiadomości pokoju
  // można dodawać/usuwać wiadomości
  // można dodawać/usuwać userów
  // można banować userów
}

// User, który reprezentuje usera na chacie
class User {
  // uuid
  // nickname
  // może zmienić swój nickname
  // może dołączyć do pokoju
  // może napisać wiadomość w pokoju
}

// SuperUser, który reprezentuje admina na chacie
class SuperUser {
  // dziedziczy metody i propy po Userze
  // może usunąć dowolną wiadomość
  // może otworzyć nowy pokój
  // może wykopać kogoś z pokoju
  // może wykopać zbanować kogoś w pokoju
}
```
