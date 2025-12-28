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

  function returnPromiseHi() {
    return new Promise(function executor(resolve) {
      setTimeout(function timeoutCallback() {
        resolve('Hi');
      }, 2000);
    });
  }

  function mapUserToGreetingPromise(user) {
    return returnPromiseHi().then(function onHiResolved(hi) {
      return `${user.name} ${hi}`;
    });
  }

  function createUserPromises() {
    return users.map(mapUserToGreetingPromise);
  }

  function onAllResolved(result) {
    console.log('Final:', result);
  }

  function onAllRejected(error) {
    console.error('Promise.all failed:', error);
  }

  const promises = createUserPromises();

  Promise.all(promises).then(onAllResolved).catch(onAllRejected);
}

main();
