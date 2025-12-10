async function initApp() {
  await authenticateUser();
  await fetchUserProfile();
  await fetchUserNotifications();
  await renderDashboard();
}

console.log('Started');
initApp();
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

// --------------------
// FUNCTIONS
// --------------------

function authenticateUser() {
  return new Promise((resolve, reject) => {
    console.log('--------------------');
    console.log('User Authentication Started');
    console.log('--------------------');

    setTimeout(() => {
      console.log('--------------------');
      console.log('User authenticated | --> You can Fetch User Profile');
      console.log('--------------------');
      resolve('Success');
    }, 8000);
  });
}

function fetchUserProfile() {
  return new Promise((resolve) => {
    console.log('--------------------');
    console.log('User Profile Fetch Started');
    console.log('--------------------');

    setTimeout(() => {
      console.log('--------------------');
      console.log('User profile fetched | --> You can Load Notifications');
      console.log('--------------------');
      resolve();
    }, 3000);
  });
}

function fetchUserNotifications() {
  return new Promise((resolve) => {
    console.log('--------------------');
    console.log('Notifications Loading Started');
    console.log('--------------------');

    setTimeout(() => {
      console.log('--------------------');
      console.log('Notifications loaded | --> You Can Render Dashboard');
      console.log('--------------------');
      resolve();
    }, 5000);
  });
}

function renderDashboard() {
  return new Promise((resolve) => {
    console.log('--------------------');
    console.log('Rendering dashboard Started');
    console.log('--------------------');

    setTimeout(() => {
      console.log('--------------------');
      console.log('Dashboard ready');
      console.log('--------------------');
      resolve();
    }, 2000);
  });
}
