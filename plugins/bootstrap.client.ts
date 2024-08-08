// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';

// export default defineNuxtPlugin(nuxtApp => {
//   console.log('Bootstrap plugin loaded'); // Ensure this is logged
//   nuxtApp.provide('bootstrap', bootstrap);
// });
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
    return {
      provide: {
        bootstrap: bootstrap
      }
    }
})