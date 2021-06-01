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
 * Ex.3: Sort string in alphabetical order
 * Прибегнул к поиску `sort()`.
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

/**
 * Ex.4: Get min integer
 */
// const getSecondMinimum = (arr) => {
//   let result,
//     counter = 0;
//   arr.sort(function (a, b) {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       counter++;
//       result = a;
//       // console.log('a:' + a + ' < ' + 'b:' + b + '   counter:' + counter);
//       if (counter == 2) return 1;
//       else return 0;
//     }
//     // return 0;
//   });
//   return result;
// };

// Подсмотрел решение на стековерфлоу. Надотразобраться как происходит перезапись
// В последнем примере должен выводить 0 
// 0 тоже integer. Почему он не включается в выборку? Как происходит проверка a - b ?
const getSecondMinimum = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[1];
};

console.log(getSecondMinimum([5, 0, 7, 3, 8])); // Output: 3
console.log(getSecondMinimum([5, 0, 2, 1, 7, 3, 8])); // Output: 1
console.log(getSecondMinimum([5, 1, 2, 0, 7, 3, 6])); // Output: 0 ?????
