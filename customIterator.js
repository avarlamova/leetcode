// Написать свой итератор для объекта
// let range = { from: 0, to: 10 } чтобы в консоль выводилось
// 0, 1, 2, 3 так далее до 10

const myIterator = ({ from, to }) => {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
};

myIterator({ from: 0, to: 10 });
