
import Hello from './component/hello'
import {siteClick} from './component/general'


const components =[
    {
        class: Hello,
        selector : '.hello'
    }
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
});