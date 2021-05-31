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
 */
const filterNonUnique = (array) => {
  let resultArray = [];
  let counter;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      counter = 0;

      if (array[i] === array[j]) {
        counter++;
      }

      counter === 1 && !resultArray.includes(array[i]) ? resultArray.push(array[i]) : null;
    }
  }

  // for (let item of array) {
  //   if (!resultArray.includes(item)) {
  //     resultArray.push(item);
  //   }
  // }

  return resultArray;
};

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // Output: [1,3,5]
console.log(filterNonUnique([1, 2, 3, 4])); // Output: [1,2,3,4]
