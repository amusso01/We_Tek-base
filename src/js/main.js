
import Hello from './component/hello'
import Menu from './component/menu'
import {siteClick} from './component/general'
import TweenMax from "gsap/TweenMax"
// import {all} from '@fortawesome/fontawesome-free/js/all' // => rememebr you can import icon individually


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


$(document).ready(function() {
   siteClick();

    //Hamburger menu    
   let menu = new Menu('burger-button', 'primary-menu');
   menu.open();

});

