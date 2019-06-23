
import Hello from './component/hello'


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

