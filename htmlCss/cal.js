
function calc()
{
	var a=parseFloat(document.getElementById('fno').value);
	var b=parseFloat(document.getElementById('sno').value);
	 var choice=document.getElementById('opertor').value;
	if(choice==='+')
	{
		document.getElementById('result').innerHTML=a+b;
	}
	if(choice==='-')
	{
		document.getElementById('result').innerHTML=a-b;
	}
	if(choice==='*')
	{
		document.getElementById('result').innerHTML=a*b;
	}
	if(choice==='/')
	{
		if(b===0)
		{
			document.getElementById('result').innerHTML="Sorry we cant divide by zero";
			return false;
		}
		document.getElementById('result').innerHTML=a/b;
	}
	
}