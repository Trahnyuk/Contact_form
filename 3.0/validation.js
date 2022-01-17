        //First name validation of contact form
        function checkFirstName(){

          const firstName = document.querySelector("#firstName");
          const icon_firstName0 = document.querySelector(".icon_firstName0");
          const icon_firstName1 = document.querySelector(".icon_firstName1");
          const error = document.querySelector(".contactForm__error_text_firtName");
          
          let regularExprationfirstName = /^[a-z A-Z -]*$/;


            if(firstName.value.match(regularExprationfirstName)){
              firstName.style.borderColor = "#27ae60";
              firstName.style.background = "#eafaf1";
              icon_firstName0.style.display = "none";
              icon_firstName1.style.display = "block";
              error.style.display = "none";
            }
            
            else{
              firstName.style.borderColor = "#e74c3c";
              firstName.style.background = "#fceae9";
              icon_firstName0.style.display = "block";
              icon_firstName1.style.display = "none";
              error.style.display = "block";
            }
            
            if(firstName.value == " "){
              firstName.style.borderColor = "#eae2b7";
              firstName.style.background = "#eae2b7f";
              icon_firstName0.style.display = "none";
              icon_firstName1.style.display = "none";
              error.style.display = "none";
            }
          }



          //Last name validation of contact form
          function checkLastName(){

            const lastName = document.querySelector("#lastName");
            const icon_lastName0 = document.querySelector(".icon_lastName0");
            const icon_lastName1 = document.querySelector(".icon_lastName1");
            const error = document.querySelector(".contactForm__error_text_lastName");
            
            let regularExprationLastName = /^[a-z A-Z -]*$/;
  
  
              if(lastName.value.match(regularExprationLastName)){
                lastName.style.borderColor = "#27ae60";
                lastName.style.background = "#eafaf1";
                icon_lastName0.style.display = "none";
                icon_lastName1.style.display = "block";
                error.style.display = "none";
              }
              
              else{
                lastName.style.borderColor = "#e74c3c";
                lastName.style.background = "#fceae9";
                icon_lastName0.style.display = "block";
                icon_lastName1.style.display = "none";
                error.style.display = "block";
              }
              
              if(lastName.value == " "){
                lastName.style.borderColor = "#eae2b7";
                lastName.style.background = "#eae2b7f";
                icon_lastName0.style.display = "none";
                icon_lastName1.style.display = "none";
                error.style.display = "none";
              }
            }






         
        //Email validation of contact form 
        function checkEmail(){

        const email = document.querySelector("#email");
        const icon_email0 = document.querySelector(".icon_email0");
        const icon_email1 = document.querySelector(".icon_email1");
        const error = document.querySelector(".contactForm__error_text_email");

         let regularExprationEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


           if(email.value.match(regularExprationEmail)){
             email.style.borderColor = "#27ae60";
             email.style.background = "#eafaf1";
             icon_email0.style.display = "none";
             icon_email1.style.display = "block";
             error.style.display = "none";
           }
           
           else{
             email.style.borderColor = "#e74c3c";
             email.style.background = "#fceae9";
             icon_email0.style.display = "block";
             icon_email1.style.display = "none";
             error.style.display = "block";
           }
           
           if(email.value == ""){
             email.style.borderColor = "#eae2b7";
             email.style.background = "#eae2b7f";
             icon_email0.style.display = "none";
             icon_email1.style.display = "none";
             error.style.display = "none";
           }
         }


         //Phone validation of montact form
         function checkPhone()
         {
          const email = document.querySelector("#phone");
          const icon_phone0 = document.querySelector(".icon_phone0");
          const icon_phone1 = document.querySelector(".icon_phone1");
          const error = document.querySelector(".contactForm__error_text_phone");
          
          const btn = document.querySelector("contactForm__send_button");
  
           let regularExprationPhone = /^\d{3}\d{3}\d{3}$/;
  
  
             if(email.value.match(regularExprationPhone)){
               email.style.borderColor = "#27ae60";
               email.style.background = "#eafaf1";
               icon_phone0.style.display = "none";
               icon_phone1.style.display = "block";
               error.style.display = "none";
               btn.style.display = "block";
             }
             
             else{
               email.style.borderColor = "#e74c3c";
               email.style.background = "#fceae9";
               icon_phone0.style.display = "block";
               icon_phone1.style.display = "none";
               error.style.display = "block";
               btn.style.display = "none";
             }
             
             if(email.value == ""){
               email.style.borderColor = "#eae2b7";
               email.style.background = "#eae2b7f";
               icon_phone0.style.display = "none";
               icon_phone1.style.display = "none";
               error.style.display = "none";
               btn.style.display = "none";

             }
         }


         /*
         

          const email = document.querySelector("#phone");
          const icon1 = document.querySelector(".icon3");
          const icon2 = document.querySelector(".icon4");
          const error = document.querySelector(".button");
          
          const btn = document.querySelector("contactForm__send_button");
  
           let regExp = /^\d{3}-\d{3}-\d{3}-\d{3}$/;
  
  
             if(email.value.match(regExp)){
               email.style.borderColor = "#27ae60";
               email.style.background = "#eafaf1";
               icon1.style.display = "none";
               icon2.style.display = "block";
               error.style.display = "none";
               btn.style.display = "block";
             }
             
             else{
               email.style.borderColor = "#e74c3c";
               email.style.background = "#fceae9";
               icon1.style.display = "block";
               icon2.style.display = "none";
               error.style.display = "block";
               btn.style.display = "none";
             }
             
             if(email.value == ""){
               email.style.borderColor = "#eae2b7";
               email.style.background = "#eae2b7f";
               icon1.style.display = "none";
               icon2.style.display = "none";
               error.style.display = "none";
               btn.style.display = "none";
             }
           }
           */