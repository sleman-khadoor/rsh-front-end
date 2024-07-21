import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
// import * as bootstrap from 'bootstrap';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bs', bootstrap);
})
