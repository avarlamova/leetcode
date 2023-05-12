/** @returns string Археологи с планеты Амордием в рамках миссии исследования глубокого космоса обнаружили останки древней цивилизации Койчщи. Изучая артефакты, учёные-амордияне выяснили, что представители исчезнувшей цивилизации использовали необычную систему исчисления времени: любая дата состоит из имени правившего императора и порядкового номера дня его правления. Чтобы не путать даты и имена, Койчщияне при указании дат добавляют префикс ta' к имени. Например, В 29 день правления императора So начался сбор урожая, в переводе на Койчщиянский это выглядит как Ta'gh ta'So 29 jE yin. Помимо этого, учёные обнаружили, что в найденных текстах регистр букв в словах подчиняется каким-то сложным правилам, которые пока не удалось полностью расшифровать. Ксеноисторики хотят сгруппировать рукописи по эпохам правлений императоров. Помогите им найти даты в рукописях. Имена императоров, известные на текущий момент, следующие: So, Ko, Ta, Qa, Goo.

Формат ввода
Одна строка - предложение из рукописи В одном предложении не может быть больше одной даты Например, Ta’gh ta’So 29 jE yin

Формат вывода
Дата, найденная в предложении, в формате <имя императора, из даты, в нижнем регистре> <число>. Если даты в предложении нет, выведите 0. Например, для даты ta'so 29 правильным ответом будет so 29 */
module.exports = function (inputString) {
  const normalizedStr = inputString.toLowerCase(); //.replaceAll(' ','')
  const emperors = ["so ", "ko ", "ta ", "qa ", "goo "];
  let numbers = "";
  let empName = "";
  for (let i = 0; i < normalizedStr.length; i++) {
    const char = normalizedStr[i];
    if (!isNaN(char)) {
      numbers += char.toString();
    }
    if (char === "'" || char === "’") {
      //проверяем ta
      if (
        normalizedStr[i - 3] + normalizedStr[i - 2] + normalizedStr[i - 1] ===
        " ta"
      ) {
        //проверяем следующие символы
        const smallSubstr =
          normalizedStr[i + 1] + normalizedStr[i + 2] + normalizedStr[i + 3];
        const largeSubstr =
          normalizedStr[i + 1] +
          normalizedStr[i + 2] +
          normalizedStr[i + 3] +
          normalizedStr[i + 4];
        if (emperors.includes(smallSubstr)) {
          empName = smallSubstr;
        } else if (emperors.includes(largeSubstr)) {
          empName = largeSubstr;
        }
      }
    }
  }
  if (numbers && empName)
    return (
      empName.trim() +
      " " +
      // на случай, если число начинается с 0
      parseInt(numbers).toString()
    );
  else return "0";
};
