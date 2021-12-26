function number2words(n) {
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
    //     let a= n[0]
    //     let b = n[1]

    //     return hundred[a-1] + '-' + ten[b]

    if (n % 10 === 0) {
      return hundred[Math.floor(n / 10) - 1];
    } else {
      return hundred[Math.floor(n / 10) - 1] + "-" + ten[n % 10];
    }
  }

  if (n > 99 && n < 1000) {
    if (n % 100 === 0) {
      return ten[Math.floor(n / 100)] + " hundred";
    }

    if (n % 100 < 11) {
      return ten[Math.floor(n / 100)] + " hundred " + ten[n % 100];
    } else {
      console.log(Math.floor(n / 10), n);
      return (
        ten[Math.floor(n / 100)] +
        " hundred " +
        hundred[Math.floor(n / 100) - 1] +
        "-" +
        ten[n % 10]
      );
    }
  } else return g;
}
