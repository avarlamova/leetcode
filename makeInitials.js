const getInitials = (input) => {
  let [name, surname] = input.split(" ");
  return name[0].toUpperCase() + "." + surname[0].toUpperCase() + ".";
};

console.log(getInitials("Bill Gates"));
console.log(getInitials("elon musk"));
