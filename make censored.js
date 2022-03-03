// Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

// Текст
// Набор стоп слов
// Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

function censor(text, words) {
  const replaceString = "$#%!";

  let textArray = text.split(" ");

  for (let i = 0; i < textArray.length; i++) {
    if (words.includes(textArray[i])) {
      textArray[i] = replaceString;
    }
  }

  return textArray.join(" ");
}
