<h2 align="center">Opis zadania FILOQueueOfPromises </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)
- Asynchroniczność (Promise / async/await)
 
## Technologie potrzebne do zadania

- Typescript 

## Cele główne

* [ ] Stwórz klase, która będzie reprezentowała kolejkę typu **FILO** - **First In Last Out** dla zbioru promisów
* [ ] Klasa powinna być podobnej struktury co do przykładu poniżej, jednak poniższa klasa **nie zawiera wszystkich wymaganych metod**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Wszystko o promisach - https://medium.com/better-programming/understanding-promises-in-javascript-13d99df067c1

## Kawałek kodu dla lepszego początku!

```javascript
class FILOQueueForPromises{
    promises = [] // lista dodanych do kolejki, nie wywołanych promisów
    results = [] // lista wyników (error to też wynik) z wywołanych promisów, łącznie z timestampem wykonania
    constructor(queueName){
        // queueName - nazwa kolejki w celach identyfikacyjnym
    }

    add(functionWrapperForPromise){
        // metoda, która dodaje do kolejki this.promises kolejną niewykonaną promisę
    }

    runNext(){
        // metoda, która odpowiada za uruchamianie ostatnio dodanej do kolejki promisy
    }

    onResult(callback){
        // metoda, wywołująca się po ukończeniu każdej promisy z kolejki z argumentem callback
        // który działa tak -> callback(promiseId, promiseResult, promiseDoneAt)
    }
}
```
