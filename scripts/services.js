(function main(){
   const containerNav = document.querySelector(".header-container__nav");
   const containerFooter = document.querySelector(".footer");
   headerComponent(containerNav);
   navbarListenEvent();
   footerComponent(containerFooter);

   getServicesContent()
   .then((serv) => {
     for (const s of serv) {
       addServicesContent(s)
     };
   });

 
})();