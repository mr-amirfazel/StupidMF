const app = Vue.createApp({
    template: `
    <header class="bg-blue-500 p-4 w-[90%] mx-auto rounded-b-2xl">
      <nav class="flex justify-between items-center">
        <h1 @click="update_route('')" class="text-white text-2xl font-bold hover:cursor-pointer">S2peed Header</h1>
        <ul class="flex space-x-4">
          <li><a @click="update_route('Vue')" :class="{'text-white hover:cursor-pointer hover:font-bold font-medium text-sm': true, 'text-gray-900 font-bold text-base': current_route === 'Vue'}">Vue</a></li>
          <li><a @click="update_route('React')" :class="{'text-white hover:cursor-pointer hover:font-bold font-medium text-sm': true, 'text-gray-900 font-bold text-base': current_route === 'React' }">React</a></li>
          <li><a @click="update_route('Angular')" :class="{'text-white hover:cursor-pointer hover:font-bold font-medium text-sm': true, 'text-gray-900 font-bold text-base': current_route === 'Angular'  }">Angular</a></li>
        </ul>
      </nav>
    </header>
            `,
    methods:{
      update_route(route){
        update_route(route)
        this.current_route = route
      },
      isRouteActive(route) {
        return current_route == route;
      },
    },
    data() {
      return {
        current_route: '', // Initialize with default value
      };
    },
   
     
            
});


app.mount('#header');

