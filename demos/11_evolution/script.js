// DEMO : Nouveautés JavaScript ES7 à ES14

// === ES7 ===
console.log("ES7 includes:", [1, 2, 3].includes(2));
console.log("ES7 exponentiation:", 2 ** 3);

// === ES8 ===
const es8Obj = { a: 1, b: 2 };
console.log("Object.values:", Object.values(es8Obj));
console.log("Object.entries:", Object.entries(es8Obj));
console.log("padStart:", '5'.padStart(3, '0'));

async function asyncExample() {
  console.log("ES8 async/await:");
  const fakeFetch = () => new Promise(res => setTimeout(() => res("ok"), 300));
  const result = await fakeFetch();
  console.log(result);
}
asyncExample();

// === ES9 ===
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log("rest spread obj:", others);

Promise.resolve("done")
  .finally(() => console.log("ES9 finally"));

const match = /(?<digit>\d)/.exec("8");
console.log("named group:", match.groups.digit);

// === ES10 ===
console.log("flat:", [1, [2, [3]]].flat(2));
console.log("flatMap:", [1, 2, 3].flatMap(x => [x, x * 2]));
console.log("fromEntries:", Object.fromEntries([["x", 1], ["y", 2]]));
console.log("trimStart:", '   hello'.trimStart());

// === ES11 ===
console.log("nullish:", null ?? "default");
const user = {};
console.log("optional chaining:", user?.info?.email);

Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("fail")
]).then(console.log);

console.log("globalThis:", globalThis);

// === ES12 ===
let config;
config ??= { debug: true };
console.log("logical assignment:", config);
console.log("numeric separators:", 1_000_000);
console.log("replaceAll:", "a-b-b".replaceAll("b", "x"));

Promise.any([
  Promise.reject("err"),
  Promise.resolve("yes")
]).then(console.log);

// === ES13 ===
const letters = ["a", "b", "c"];
console.log(".at():", letters.at(-1));

class Secret {
  #code = 1234;
  reveal() { return this.#code; }
}
console.log("private class field:", new Secret().reveal());

// === ES14 ===
const nums = [3, 2, 1];
console.log("toSorted:", nums.toSorted());
console.log("original nums:", nums);

const sym = Symbol("my symbol");
console.log("symbol description:", sym.description);