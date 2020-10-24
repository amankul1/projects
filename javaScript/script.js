
(()=>{
   let path = [
      "./image/sliderImag/fon1.jpg","./image/sliderImag/fon2.jpg","./image/sliderImag/fon3.jpg" ,"./image/sliderImag/head.jpg"
   ];
   let headFon = document.querySelector(".header");
   headFon.style =   `background-image: url(${path[3]})`;
   let i=0;
   setInterval(() => {
      if(i===4){
         i=0
      }
      headFon.style =   `background-image: url(${path[i]})`;
      i++
   }, 10000);

})();


//-----------------------Menu scrolling ---------------------------

(()=>{
   let menuLinks = document.querySelectorAll(".headerMenuLink");
   let contentblocks = document.querySelectorAll(".contentBlocks");
   let contacts = document.querySelector(".headerContactLink");
   let footer = document.querySelector(".footer");
   let blocks = [];
   let menu = [];

   menuLinks.forEach(element => {
      menu.push(element);
   });
   menu.push(contacts);
   
   contentblocks.forEach(e=>{
      blocks.push(e);
   })
   blocks.push(footer);


   for(let i=0; i<blocks.length; i++){
      menu[i].addEventListener("click", (e)=>{
         let current = document.documentElement.scrollTop
         
         if(current < blocks[i].offsetTop){
            let inter = setInterval(() => {
               if(current >= blocks[i].offsetTop){
                  clearInterval(inter);
               }
               window.scrollTo(0, current);
               current+=10;
            }, 0.5);
         }else if(current > blocks[i].offsetTop){
            let inter = setInterval(() => {
               if(current <= blocks[i].offsetTop){
                  clearInterval(inter);
               }
               window.scrollTo(0, current);
               current-=10;
            }, 0.5);
         }

      });
   }


   let progressArrow = document.querySelector(".progressArrow");
   let progressLine = document.querySelector(".varticalProgress");
   let progHeight = progressLine.clientWidth;
   let docHeight = document.body.clientHeight;
   let winHeight = window.innerHeight;
   let moving = 0;

   document.addEventListener("scroll", (e)=>{
      let scrolling = document.documentElement.scrollTop;

      for(let i=0; i<menu.length; i++){
         if(scrolling+blocks[i].clientHeight/2 > blocks[i].offsetTop){
            menu.forEach(element=>{
               if(menu[i] === element){
                  element.style = "border-bottom: 1.5px solid white; color:rgb(255, 255, 255); transform: scale(1.01);";
               }else{
                  element.style = "border-bottom: 1.5px solid rgb(10, 10, 10, 0.3); color:rgb(69, 175, 175); transform: scale(1);";
               }
            });
         }
         
      }


      let m = document.querySelector(".headerMenuFon");
      if(scrolling > m.clientHeight && scrolling < (m.clientHeight)*3){
         m.style = "position: fixed; width:100vw; transform: scaleY(0); ";
         if(scrolling > m.clientHeight*2){
            m.style = " position: fixed; width:100vw; transform: scaleY(1); ";
         }
      }else if(scrolling  < m.clientHeight){
         m.style = "position:relative; width:100vw;";
      }

      moving = ((100/(docHeight-winHeight))*window.pageYOffset)*(progHeight-15)/100;
      progressArrow.style.transform = `translateX(${moving}px) translateY(-12px)`;
      
   })

})();

