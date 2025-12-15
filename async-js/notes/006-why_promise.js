// compare this with the code in callback_hell.js
authenticateUser()
  .then(fetchUserProfile)
  .then(fetchUserNotifications)
  .then(renderDashboard);

// --------------------
// FUNCTIONS
// --------------------

function authenticateUser() {
  return new Promise((resolve) => {
    console.log('--------------------');
    console.log('User Authentication Started');
    console.log('--------------------');

    setTimeout(() => {
      console.log('--------------------');
      console.log('User authenticated | --> You can Fetch User Profile');
      console.log('--------------------');
      resolve();
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
