
        function regForm() {

            const firstName =
                document.getElementsByClassName["form"]["firstName"];

            const lastName =
                document.getElementsByClassName["form"]["lastName"];

            const email =
                document.getElementsByClassName["form"]["email"];

            const phone =
                document.getElementsByClassName["form"]["phone"];

           

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