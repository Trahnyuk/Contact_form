
        function regForm() {

            const firstName =
                document.forms["myForm"]["firstName"];

            const lastName =
                document.forms["myForm"]["lastName"];

            const email =
                document.forms["myForm"]["email"];

            const phone =
                document.forms["myForm"]["phone"];

           

            if (firstName.value == "") {

                window.alert("Please enter your First name.");
                firstName.focus();
                return false;
            }

            if (lastName.value == "") {
                window.alert("Please enter your Last name.");
                lastName.focus();
                return false;
            }


            if (email.value == "") {
                window.alert(
                "Please enter a valid e-mail address.");
                email.focus();
                return false;
            }

            if (phone.value == "") {
                window.alert(
                "Please enter your telephone number.");
                phone.focus();
                return false;
            }

            return true;
        }