var imgno=1;
	function slider()
	{
	 var img=document.getElementById("slide");
	 img.src="images/"+imgno+".jpg";
	 imgno++;
	 if(imgno==5)
	 {
	  imgno=1;
	 }
	 window.setTimeout("slider()",2000);
	}