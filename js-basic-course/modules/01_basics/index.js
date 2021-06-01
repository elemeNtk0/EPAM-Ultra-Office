/**
 * Ex.1: Change the capitalization of all letters in a string
 *
 * Проблема возникла в том, что не мог сначала понять — почему не записывается значение.
 * Пришлось добавить вторую переменную, чтобы записывать результат в неё (transformedText)
 */
const changeCase = (text) => {
  let textArray = text.split(''),
    transformedText = '';

  for (const item of textArray) {
    item === item.toUpperCase()
      ? (transformedText += item.toLowerCase())
      : (transformedText += item.toUpperCase());
  }

  return transformedText;
};

console.log(changeCase('21century'));
console.log(changeCase('Hybris'));

/**
 * Ex.2: Filter out the non-unique values in an array
 * Понял, что надо сравнивать каждый с каждым, но первое решение вообще меня запутало.
 * Решил поискать примеры. Наткнулся на https://learn.javascript.ru/task/array-unique.
 * Надо как-то фильтровать, но я не понимаю по какой логике — фор внутри фора ерунда.
 * Не выходит...
 * Добился некоторого сравнения, но не получается исключить дубли. Логика на сравнение хромает.
 *
 *
 *
 * Спустя N времени добил логику, "подогнав" под примеры. Понял, что обнуление счётчика было не в том цикле.
 * НО через фильтр так и не понял как сделать  (((
 */
const filterNonUnique = (array) => {
  let resultArray = [];
  let counter;
  let arraySize = array.length - 1;

  for (let i = 0; i <= arraySize; i++) {
    counter = 0;
    for (let j = 0; j <= arraySize; j++) {
      if (array[i] === array[j]) {
        counter++;
      }
      counter === 1 && j === arraySize ? resultArray.push(array[i]) : null;
    }
  }

  return resultArray;
};

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // Output: [1,3,5]
console.log(filterNonUnique([1, 2, 3, 4])); // Output: [1,2,3,4]

/**
 * Sort string in alphabetical order
 * Прибегнул к поиску sort. 
 * Не понимаю, почему не работает с простым решением `return a - b`...
 * Получается, что это такая же запись. Но не сортирует такой функцией сравнения
 * так же не понял, почему после функции `sort` нельзя сразу добавить `.join('')` и всё это обернуть в return
 */
const alphabetSort = (str) => {
  // let strSorted = str;
  let strSorted = str.split('');
  strSorted.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return strSorted.join('');
};

console.log(alphabetSort('Python')); // Output: ‘Phnoty’
