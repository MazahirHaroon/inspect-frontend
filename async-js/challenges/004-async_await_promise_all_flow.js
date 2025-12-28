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

  async function mapUserToGreeting(user) {
    const hi = await returnPromiseHi();
    return `${user.name} ${hi}`;
  }

  async function resolveAllUsers() {
    try {
      const promises = users.map(mapUserToGreeting);
      const result = await Promise.all(promises);
      onAllResolved(result);
    } catch (error) {
      onAllRejected(error);
    }
  }

  function onAllResolved(result) {
    console.log(result);
  }

  function onAllRejected(error) {
    console.error('Promise.all failed:', error);
  }

  resolveAllUsers();
}

main();
