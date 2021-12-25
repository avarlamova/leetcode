function number2words(n) {
  let resString = "";

  let ten = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let hundred = [
    "10",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (n < 20) {
    return ten[n];
  }

  if (n > 19 && n < 100) {
    // let firstPlace = parseInt(n.toString()[0]) // старший разряд
    console.log(hundred[n % 10]);

    if (n % 10 === 0) {
      return hundred[(n % 10) - 1];
    } else {
      resString += hundred[(n % 10) - 1] + "-" + ten[n % 10];
      return resString;
    }
  }

  if (n > 100 && n < 1000) {
    let firstPlace = parseInt(n.toString()[0]); // старший разряд
    return;
  } else return "fu";
}
