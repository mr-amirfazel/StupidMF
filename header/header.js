const app = Vue.createApp({
    template: `
    <header class="bg-blue-500 p-4">
      <nav class="flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Vue Header</h1>
        <ul class="flex space-x-4">
          <li><a  class="text-white hover:cursor-pointer hover:font-bold">Home</a></li>
          <li><a  class="text-white hover:cursor-pointer hover:font-bold">About</a></li>
          <li><a  class="text-white hover:cursor-pointer hover:font-bold">Services</a></li>
          <li><a  class="text-white hover:cursor-pointer hover:font-bold">Contact</a></li>
        </ul>
      </nav>
    </header>
            `
});


app.mount('#header');

