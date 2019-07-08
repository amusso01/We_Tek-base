// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import Hello from './component/hello'
import Menu from './component/menu'
import {siteClick} from './component/general'
import TweenMax from "gsap/TweenMax"



/** Populate Router instance with DOM routes */
const routes = new Router({
    // All pages
    common,
    // Home page
    home,
   
  });


// Component
const components =[
    {
        class: Hello,
        selector : '.hello'
    },
]

components.forEach(components => {
    if(document.querySelector(components.selector) !== null){
        document.querySelectorAll(components.selector).forEach(
            element => new components.class(element, components.options)
        )
    }
})


jQuery(document).ready(() => {
    routes.loadEvents();
})

