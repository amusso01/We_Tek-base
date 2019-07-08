import Menu from './../component/menu'

export default {
    init() {
      // JavaScript to be fired on all pages
      console.log('common.js');

  
      
    },
    finalize() {
      // JavaScript to be fired on all pages, after page specific JS is fired
      
        // //Hamburger menu    
        let menu = new Menu('burger-button', 'primary-menu');
        menu.open(); 
     
    },
  };
  