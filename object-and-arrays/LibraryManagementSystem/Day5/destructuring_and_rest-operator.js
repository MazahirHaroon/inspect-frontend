/*
Destructuring and Rest Operator

- Scenario:
  You work at a small finance office and maintain a record of all account balances.
  You often need to check one person’s balance (say, Mazahir's) separately
  while still keeping access to all the others.

- Task:
  Use object destructuring to extract Mazahir's balance directly.
  Then, use the rest operator (...) to collect all remaining balances into a separate object.
*/

const accountBalance = {
  naveen: 3000,
  mazahir: 2000,
  shiv: 15000,
  ramesh: 3000,
};

// ❌ Traditional way (access each manually)
// const mazahir = accountBalance.mazahir;
// const naveen = accountBalance.naveen;

// ✅ Using Destructuring and Rest
const { mazahir, ...others } = accountBalance;

console.log(`Mazahir's balance: ${mazahir}`);
console.log(`Other balances:' ${others}`);

/*
Expected Output:
Mazahir's balance: 2000
Other balances: { naveen: 2000, shiv: 15000, ramesh: 15000 }
*/
