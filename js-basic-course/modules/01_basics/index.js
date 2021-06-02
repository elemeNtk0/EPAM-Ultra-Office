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
      if (counter === 1 && j === arraySize) resultArray.push(array[i]);
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
 * Write function which gets array of integers and returns second minimum value
 */
// Finish! Перечитал как работает sort() и понял, что он уже сортирует и мне просто второй элемент массива надо вернуть
const getSecondMinimum = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[1];
};

console.log(getSecondMinimum([5, 0, 7, 3, 8])); // Output: 3
console.log(getSecondMinimum([5, 0, 2, 1, 7, 3, 8])); // Output: 1
console.log(getSecondMinimum([5, 1, 2, 0, 7, 3, 6])); // Output: 1

/**
 * Ex.5: Double every even integer
 * Write function which gets array of integers and returns another array of integers where every even number is doubled
 */
const doubleEveryEven = (arr) => {
  let result = [];

  arr.forEach((item) => {
    item % 2 === 0 ? result.push(item * 2) : result.push(item);
  });

  return result;
};

console.log(doubleEveryEven([2, 0, 7, 3, 8, 4])); // Output: [4,0,7,3,16,8]

/**
 * Ex.6: Create array with all possible pairs of two arrays
 * Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.
 * Нашёл решение «Декартово произведение» по этой задаче.
 * const cartesian =
  (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [...d, e])), [[]]);
 */
const getArrayElementsPairs = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
};

console.log(getArrayElementsPairs([1, 2], ['a', 'b'])); // Output: [[1, “a”], [1, “b”], [2, “a”], [2, “b”]]

// let obj = { here: { is: 'an' }, object: 2 };
// let obj2 = obj;
// let obj3 = { here: { is: 'an' }, object: 2 };
// console.log(obj === obj3);

// прочитать:
// obj.keys
// typeOf
// Рекурсия (( Смотреть, что она возвращает

// Сделать для начала сравнение с простыми обьектами `a: 1, b: 2`

console.log(deepEqual(obj, obj)); // Output: true
console.log(deepEqual(obj, { here: 1, object: 2 })); // Output: false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })); // Output: true
