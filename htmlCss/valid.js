
function validation()
{
	var firstname=document.getElementById("fname");
	var lastname=document.getElementById("lname");
	var city=document.getElementById("city");
	var postalCode=document.getElementById("postalCode");
	var Country=document.getElementById("Country");
	var phoneNumber=document.getElementById("phoneNumber");
	var fax =document.getElementById("fax");
	var email=document.getElementById("email");
	var check1=document.getElementById("paypal");
	var check2=document.getElementById("manual");
	var check3=document.getElementById("credit");
	var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if(firstname.value=="")
	{
		 window.alert("no blank Space allowed");
		return false;
			
	}
	if(lastname.value.trim()=="")
	{
		window.alert("last name must be fiiled");
		return false;
	}
	if(city.value.trim()=="")
	{
		window.alert("city must be filled");
		return false;
	}
	if(postalCode.value.trim()=="")
	{
		window.alert("postal code must be filled");
		return false;
	}
	if(Country.value.trim()=="")
	{
		window.alert("country must be filled");
		return false;
	}
	if(phoneNumber.value.trim()=="")
	{
		window.alert("phone number must be filled");
		return false;
	}
	if(fax.value.trim()=="")
	{
		window.alert("fax number must be filled");
		return false;
	}
	if(email.value.match(mailformat))
	{
			 if(check1.checked==true||check2.checked==true||check3.checked==true)
			{
				return true;
			}
			else
			{
				alert("choose payment option");
				return false;
			}
		return true;
	}
	else
	{
		window.alert("enter correct email")
		return false;
	}

}
