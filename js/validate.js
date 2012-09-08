function validateForm()
{
var x_name=document.forms["f1"]["uname"];
var x_pass=document.forms["f1"]["upass"];
var x_fname=document.forms["f1"]["fname"];
var x_lname=document.forms["f1"]["lname"];
var frm=document.forms["f1"];
var v=10;
var s=0;
var c=0;
//var x_r1=document.forms["f1"]["r1"];
var file = document.getElementById('fileToUpload').files[0];
var _regExp=/[0-9]/i;
var Exp=/[A-z][0-9]/
var day=document.f1.date;
var month=document.f1.month;
var year=document.f1.year;
var cuntry=document.f1.cuntry;
var phone=document.f1.phone;
var reg_exp=/^\+91\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//var r2=document.f1.r2;
var res=reg_exp.test(phone.value);

 //radioCollection = frm.elements["radioSet"];
	var male=document.getElementById('male').value;
	var female=document.getElementById('female').value;
	var nam=Exp.test(x_name.value);
var result=_regExp.test(x_fname.value);
var result1=_regExp.test(x_lname.value);
  if (x_name.value==null || x_name.value==""||x_name.value.length<3||x_name.value.length>8||nam==false)
  {
	  c--;
	  document.getElementById("pro").value=s;
	  document.getElementById("w_prog").innerHTML=s+"%";
	  document.getElementById('w_name').style.visibility = 'visible';
	document.getElementById('w_fname').style.visibility = 'hidden';
	document.getElementById('w_lname').style.visibility = 'hidden';
	document.getElementById('w_pass').style.visibility = 'hidden';
  document.getElementById("w_name").innerHTML="First name must be filled out between 3 or 8 char";
  //alert(x);
  x_name.focus();
  return false;
 
  }
 else{
	 c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }
  if (x_pass.value==null || x_pass.value==""||x_pass.value.length<6)
  {
	  
	 // alert(c);
	document.getElementById('w_name').style.visibility = 'hidden';
		document.getElementById('w_fname').style.visibility = 'hidden';
	document.getElementById('w_lname').style.visibility = 'hidden';
	document.getElementById('w_pass').style.visibility = 'visible';
  document.getElementById("w_pass").innerHTML="password must be filled out above 6 char";
  //alert(x);
  x_pass.focus();
  return false;
  
  }
   else{
	   c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }
  if (x_fname.value==null || x_fname.value==""||x_fname.value.length<2||x_fname.value.length>6||result==true)
  {
	  c--;
	  document.getElementById('w_lname').style.visibility = 'hidden';
	  document.getElementById('w_name').style.visibility = 'hidden';
	  document.getElementById('w_fname').style.visibility = 'visible';
	document.getElementById('w_pass').style.visibility = 'hidden';
  document.getElementById("w_fname").innerHTML="First name must be filled out between 2 or 6 char";
  //alert(x);
  x_fname.focus();
  return false;
  
  }
  else{
	  c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }
  if (x_lname.value==null || x_lname.value==""||x_lname.value.length<2||x_lname.value.length>15||result1==true)
  {
	  c--;
	    document.getElementById('w_lname').style.visibility = 'visible';
	  document.getElementById('w_name').style.visibility = 'hidden';
	 
	document.getElementById('w_pass').style.visibility = 'hidden';
	  document.getElementById('w_fname').style.visibility = 'hidden';
  document.getElementById("w_lname").innerHTML="last name must be filled out between 2 or 15 char";
  //alert(x);
  x_lname.focus();
  return false;
  
  }
	else{
		c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }		
 if(file==""||file==null){
	 c--;
	 document.getElementById('w_lname').style.visibility = 'hidden';
	  document.getElementById('w_name').style.visibility = 'hidden';
	 
	document.getElementById('w_pass').style.visibility = 'hidden';
	  document.getElementById('w_fname').style.visibility = 'hidden';
	  document.getElementById('w_file').style.visibility = 'visible';
	 document.getElementById("w_file").innerHTML="picture is empty";
	 return false;
 }
            if (file) {
				  
                var fileSize = 0;
                if (file.size > 1024 * 1024)
                    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                else
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
				
                document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
                document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
                document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
                //alert(fileName);
                c++;
					s=s+v;
				document.getElementById("pro").value=s;
				document.getElementById("w_prog").innerHTML=s+"%";
        }
        
        //alert(year.value);
        //alert(day.value);
        if(male.checked||female.checked){
			 document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
	 	  document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			return alert("please");
		}
		else{
			c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }
		//alert(day.value);
		if(day.value=="day"){
			document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
		 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			//alert("please select day");
			document.getElementById("w_dob").innerHTML="please select day";
			return false;
		}
		
		if(month.value=="month"){
			document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
		 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			document.getElementById("w_dob").innerHTML="please select month";
			return false;
		}
		if(year.value=="year"){
			c--;
			document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
			 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			document.getElementById("w_dob").innerHTML="please select year";
			return false;
		}
		
		else{
			c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 }
 alert(frm.r2.length);
		for (i = 0; i < frm.r2.length; i++){
			
      if (frm.r2[i].checked==true){
		c++;
	 s=s+v;
	 document.getElementById("pro").value=s;
	 document.getElementById("w_prog").innerHTML=s+"%";
 
		  break;
         return false;
         
      }
      else{
		  c--;
		  document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
			 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			document.getElementById('w_dob').style.visibility = 'hidden';
			document.getElementById('w_r').style.visibility = 'visible';
		  document.getElementById("w_r").innerHTML="please select hobies";
		  return false;
	  }
		  
  }
 // alert("cuntry.value");
  if(cuntry.value=="cuntry")
			{
				c--;
				document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
			 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			document.getElementById('w_dob').style.visibility = 'hidden';
			document.getElementById('w_r').style.visibility = 'hidden';
			document.getElementById('w_cuntry').style.visibility = 'visible';
	  document.getElementById("w_cuntry").innerHTML="please select cuntry";
	  return false;
				}
				else{
					c++;
				s=s+v;
				document.getElementById("pro").value=s;
				document.getElementById("w_prog").innerHTML=s+"%";
				}
				
				if(res==false){
					c--;
					document.getElementById('w_lname').style.visibility = 'hidden';
			document.getElementById('w_name').style.visibility = 'hidden';
			 document.getElementById('w_file').style.visibility = 'hidden';
			document.getElementById('w_pass').style.visibility = 'hidden';
			document.getElementById('w_fname').style.visibility = 'hidden';
			document.getElementById('w_dob').style.visibility = 'hidden';
			document.getElementById('w_r').style.visibility = 'hidden';
			document.getElementById('w_cuntry').style.visibility = 'hidden';
			document.getElementById('w_phone').style.visibility = 'visible';
	  document.getElementById("w_phone").innerHTML="please select phone number only this formate +91(123)-456-7890";
	  return false;
  }
			else{
				c++;
				s=s+v;
				document.getElementById("pro").value=s;
				document.getElementById("w_prog").innerHTML=s+"%";
				
				document.getElementById('w_phone').style.visibility = 'hidden';
				}
				if(c==10){
				document.getElementById("msg").innerHTML="YOUR FORM SUCCESSFULLY SUBMITED";
				//alert(c);
			}
			//alert(c);
	/*function increase(){
		var l=x_name.value.length;
		l=x_pass.value.length;
		document.getElementById("pro").innerHTML=l;
}*/
		return false;
}
   
