// async-await-without-promise-all-guess-flow.js
// Guess the flow of the code.

function main() {
  const users = [
    {
      name: 'Peter',
      hobbies: ['Running', 'JS'],
    },
    {
      name: 'Mazahir',
      hobbies: ['Boardgames', 'JS'],
    },
  ];

  function returnPromiseHi(userName) {
    return new Promise(function executor(resolve) {
      setTimeout(function timeoutCallback() {
        resolve(`Hi from ${userName}`);
      }, 2000);
    });
  }

  async function processUsersSequentially() {
    const results = [];

    for (const user of users) {
      const greeting = await returnPromiseHi(user.name);
      results.push(`${user.name} ${greeting}`);
      logIntermediateResult(results);
    }

    onProcessingComplete(results);
  }

  function logIntermediateResult(results) {
    console.log('Intermediate:', results);
  }

  function onProcessingComplete(finalResult) {
    console.log('Final:', finalResult);
  }

  processUsersSequentially();
}

main();
