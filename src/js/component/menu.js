export default class Menu {

    constructor(burger , menu){
        this.burger = document.getElementById(burger)
        this.menu = document.getElementById(menu)
    }

    open(){
        
        this.burger.addEventListener('click', (e) => {
            this.menu.classList.toggle('is-active');
            e.target.classList.toggle('is-active');
        }) ;
    }

  }