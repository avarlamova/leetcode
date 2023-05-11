function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("Hello");
async function test() {
  await sleep(2000);
  console.log("world");
}

test();
