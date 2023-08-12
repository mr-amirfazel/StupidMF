let app = angular.module('myApp', [])

app.controller('FooterController', function ($scope) {
    // Controller logic can be added here
  });

  app.component('appFooter', {
    template: `
      <footer class="bg-indigo-700 text-white text-center py-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    `
  });