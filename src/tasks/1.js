// Задача №2
// Он должен начинаться с хэштега (#).
// Все слова должны иметь первую букву заглавную.
// Если конечный результат превышает 140 символов, он должен вернуть false.
// Если вход или результат является пустой строкой, он должен вернуть false.

const generateHashtag = (str) => {};

console.log(1, generateHashtag(' Hello there thanks for trying my Kata')); // #HelloThereThanksForTryingMyKata
console.log(2, generateHashtag('        hello     World')); // #HelloWorld
console.log(3, generateHashtag('')); // false
console.log(4, generateHashtag(' '.repeat(200))); // false
