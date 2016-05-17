


//alarm
var m = prompt('insert minute');

	
function ourTime(){

	var time = new Date();

	var oms = time.toLocaleTimeString();
	
	document.open();
	document.write(oms);
	document.close();

	if (oms=='9:'+m+':00'){
		alert("Begi");
	}
}

		setInterval(ourTime,1000);
		
	
		
		
		//timer
 var array1 = [0,0,20];// clearInrterval
  
  function myTimer(){
	  
	  document.open();
	  document.write("<br>"+ array1[0]+":"+array1[1]+":"+array1[2]);
	  document.close();
			if (array1[2]==0){
				if (array1[1]==0){
					if(array1[0]==0){
						
						document.write ("don't stop me now");
						clearInrterval(stop);
						
					}
					array1[0]--;
					array1[1]=60;
					
				}
				array1[1]--;
				array1[2]=60;
				
			}
			array1[2]--;
	  
  }
  
  var stop= setInterval(function(){myTimer()},1000);		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		