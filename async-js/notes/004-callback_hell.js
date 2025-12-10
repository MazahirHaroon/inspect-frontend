authenticateUser(fetchUserProfile, fetchUserNotifications, renderDashboard);
// fetchUserProfile();
// fetchUserNotifications();
// renderDashboard();

// --------------------
// FUNCTIONS
// --------------------

// function authenticateUser() {
//   console.log('--------------------');
//   console.log('User Authentication Started');
//   console.log('--------------------');
//   setTimeout(() => {
//     console.log('--------------------');
//     console.log('User authenticated | --> You can Fetch User Profile');
//     console.log('--------------------');
//   }, 8000);
// }

// function fetchUserProfile() {
//   console.log('--------------------');
//   console.log('User Profile Fetch Started');
//   console.log('--------------------');
//   setTimeout(() => {
//     console.log('--------------------');
//     console.log('User profile fetched | --> You can Load Notifications');
//     console.log('--------------------');
//   }, 3000);
// }

// function fetchUserNotifications() {
//   console.log('--------------------');
//   console.log('Notifications Loading Started');
//   console.log('--------------------');
//   setTimeout(() => {
//     console.log('--------------------');
//     console.log('Notifications loaded | --> You can Render Dashboard');
//     console.log('--------------------');
//   }, 5000);
// }

// function renderDashboard() {
//   console.log('--------------------');
//   console.log('Rendering dashboard Started');
//   console.log('--------------------');
//   setTimeout(() => {
//     console.log('--------------------');
//     console.log('Dashboard ready');
//     console.log('--------------------');
//   }, 2000);
// }

/*.............................*/

authenticateUser(fetchUserProfile, fetchUserNotifications, renderDashboard);

function authenticateUser(
  fetchUserProfile,
  fetchUserNotifications,
  renderDashboard
) {
  console.log('--------------------');
  console.log('User Authentication Started');
  console.log('--------------------');

  setTimeout(() => {
    console.log('--------------------');
    console.log('User authenticated | --> You can Fetch User Profile');
    console.log('--------------------');
    nextStep(fetchUserNotifications); // proceed
  }, 8000);
}

function fetchUserProfile(nextStep) {
  console.log('--------------------');
  console.log('User Profile Fetch Started');
  console.log('--------------------');

  setTimeout(() => {
    console.log('--------------------');
    console.log('User profile fetched | --> You can Load Notifications');
    console.log('--------------------');
    nextStep(renderDashboard); // proceed
  }, 3000);
}

function fetchUserNotifications(nextStep) {
  console.log('--------------------');
  console.log('Notifications Loading Started');
  console.log('--------------------');

  setTimeout(() => {
    console.log('--------------------');
    console.log('Notifications loaded | --> You can Render Dashboard');
    console.log('--------------------');
    nextStep(); // final step
  }, 5000);
}

function renderDashboard() {
  console.log('--------------------');
  console.log('Rendering dashboard Started');
  console.log('--------------------');

  setTimeout(() => {
    console.log('--------------------');
    console.log('Dashboard ready');
    console.log('--------------------');
  }, 2000);
}

// authenticateUser(() => {
//     fetchUserProfile(() => {
//         fetchUserNotifications(() => {
//             renderDashboard(() => {
//                 // more...
//             });
//         });
//     });
// });
