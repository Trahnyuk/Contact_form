        //First name validation of contact form
        function checkFirstName(){

          const firstName = document.querySelector("#firstName");
          const icon5 = document.querySelector(".icon5");
          const icon6 = document.querySelector(".icon6");
          const error = document.querySelector(".contactForm__error_text_firtName");
          
          const btn = document.querySelector("contactForm__send_button");

          let regularExprationfirstName = /^[a-z A-Z -]*$/;


            if(firstName.value.match(regularExprationfirstName)){
              firstName.style.borderColor = "#27ae60";
              firstName.style.background = "#eafaf1";
              icon5.style.display = "none";
              icon6.style.display = "block";
              error.style.display = "none";
              btn.style.display = "block";
            }
            
            else{
              firstName.style.borderColor = "#e74c3c";
              firstName.style.background = "#fceae9";
              icon5.style.display = "block";
              icon6.style.display = "none";
              error.style.display = "block";
              btn.style.display = "none";
            }
            
            if(firstName.value == " "){
              firstName.style.borderColor = "#eae2b7";
              firstName.style.background = "#eae2b7f";
              icon5.style.display = "none";
              icon6.style.display = "none";
              error.style.display = "none";
              btn.style.display = "none";
            }
          }



          //Last name validation of contact form
          function checkLastName(){

            const lastName = document.querySelector("#lastName");
            const icon7 = document.querySelector(".icon7");
            const icon8 = document.querySelector(".icon8");
            const error = document.querySelector(".contactForm__error_text_lastName");
            
            const btn = document.querySelector("contactForm__send_button");
  
            let regularExprationLastName = /^[a-z A-Z -]*$/;
  
  
              if(lastName.value.match(regularExprationLastName)){
                lastName.style.borderColor = "#27ae60";
                lastName.style.background = "#eafaf1";
                icon7.style.display = "none";
                icon8.style.display = "block";
                error.style.display = "none";
                btn.style.display = "block";
              }
              
              else{
                lastName.style.borderColor = "#e74c3c";
                lastName.style.background = "#fceae9";
                icon7.style.display = "block";
                icon8.style.display = "none";
                error.style.display = "block";
                btn.style.display = "none";
              }
              
              if(lastName.value == " "){
                lastName.style.borderColor = "#eae2b7";
                lastName.style.background = "#eae2b7f";
                icon7.style.display = "none";
                icon8.style.display = "none";
                error.style.display = "none";
                btn.style.display = "none";
              }
            }






         
        //Email validation of contact form 
        function checkEmail(){

        const email = document.querySelector("#email");
        const icon1 = document.querySelector(".icon1");
        const icon2 = document.querySelector(".icon2");
        const error = document.querySelector(".contactForm__error_text_email");
        
        const btn = document.querySelector("contactForm__send_button");

         let regularExprationEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


           if(email.value.match(regularExprationEmail)){
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


         //Phone validation of montact form
         function checkPhone()
         {
          const email = document.querySelector("#phone");
          const icon1 = document.querySelector(".icon3");
          const icon2 = document.querySelector(".icon4");
          const error = document.querySelector(".contactForm__error_text_phone");
          
          const btn = document.querySelector("contactForm__send_button");
  
           let regularExprationPhone = /^\d{3}\d{3}\d{3}$/;
  
  
             if(email.value.match(regularExprationPhone)){
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