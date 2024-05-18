const test = 10000;
console.time("Test");
for (let i = 0; i < test; i++) {
  console.log(i);
}
console.timeEnd("Test");
