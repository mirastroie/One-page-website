    
  /*Javascript animation*/
	



 function ScrolledIntoView(x) {
    var rect = x.getBoundingClientRect();
    var xTop = rect.top;
    var xBottom = rect.bottom;
    var ok= xTop < window.innerHeight && xBottom >0;
    return ok;
    }








	

window.onscroll = function() {myFunction()}; 

     var se=document.getElementById("anima");
     var se1=document.getElementById("s1");
     var se2=document.getElementById("s2");
     var se3=document.getElementById("s3");
     var se4=document.getElementById("s4");
     var se12=document.getElementById("s12");
     var se5=document.getElementById("s5");
     var se6=document.getElementById("s6");
     var se7=document.getElementById("s7");
     var se8=document.getElementById("s8");
     var se9=document.getElementById("s9");

function myFunction() {
    
    
         
           /* verificare element in viewport*/
         
			
			 var box=document.getElementById("first");
                  if(ScrolledIntoView(box))
                        box.classList.add("activate");
	              else box.classList.remove("activate");
			 var par=document.getElementById("paragraf");
                  if(ScrolledIntoView(par))
                        {par.classList.add("activate");
						console.log("paragraf in");}
	              else par.classList.remove("activate");
			var box2=document.getElementById("second");
                  if(ScrolledIntoView(box2))
                        box2.classList.add("activate");
	              else box2.classList.remove("activate");
			 
            var b1=document.getElementById("rose");
                  if(ScrolledIntoView(b1))
                        b1.classList.add("activate");
	              else b1.classList.remove("activate");
             var b2=document.getElementById("home");
                  if(ScrolledIntoView(b2))
                        b2.classList.add("activate");
	              else b2.classList.remove("activate");
			 
			
			 
			 
			 /*!!!! PENTRU FIECARE SECTIUNE - TRANZITII + NAVBAR !!!!
			 
			 /* tranzitie bd*/
			if (ScrolledIntoView(se1))
                          {document.getElementById("bd").className = "test2";
		                   var dot1js=document.getElementById("dot1");
		                   dot1js.classList.add("active");
	                   	  var este=dot1js.classList.contains("active");}
     
   
else { if (ScrolledIntoView(se2) && !ScrolledIntoView(se1)) { document.getElementById("bd").className = "test";
                                     var dot2js=document.getElementById("dot2");
		                               dot2js.classList.add("active"); }
        else {if (ScrolledIntoView(se3) && !ScrolledIntoView(se2)) { document.getElementById("bd").className = "test3";
		                                     var dot3js=document.getElementById("dot3");
		                                      dot3js.classList.add("active");}
               else {if(ScrolledIntoView(se4) && !ScrolledIntoView(se3)) { document.getElementById("bd").className = "test4";
			                                       var dot4js=document.getElementById("dot4");
		                                            dot4js.classList.add("active");}
                     else {if(ScrolledIntoView(se5) && !ScrolledIntoView(se4)) 
                                                    {
                                                       document.getElementById("bd").className = "test5";
			                                            var dot5js=document.getElementById("dot5");
		                                                dot5js.classList.add("active");}
                           else {
                               
                                  if(ScrolledIntoView(se6) && !ScrolledIntoView(se5))
                                                           { document.getElementById("bd").className = "test6";
			                                       var dot6js=document.getElementById("dot6");
		                                            dot6js.classList.add("active");}
                                 else {
                                     
                                        if(ScrolledIntoView(se7) && !ScrolledIntoView(se6))
                                            { document.getElementById("bd").className = "test7";
			                                       var dot7js=document.getElementById("dot7");
		                                            dot7js.classList.add("active");}
                                     else 
                                         {
                                             if(ScrolledIntoView(se8) && !ScrolledIntoView(se7))
                                            { document.getElementById("bd").className = "test8";
			                                       var dot8js=document.getElementById("dot8");
		                                            dot8js.classList.add("active");}
                                             else 
                                                 {
                                                      if(ScrolledIntoView(se9) && !ScrolledIntoView(se8))
                                            { document.getElementById("bd").className = "test9";
			                                       var dot9js=document.getElementById("dot9");
		                                            dot9js.classList.add("active");}
                                                 }
                                             
                                         }
                                 }
                           }
                          
                          }
           
                    }
             }
     }       

if (!ScrolledIntoView(se1) && !ScrolledIntoView(se2) && !ScrolledIntoView(se3) &&!ScrolledIntoView(se4) && 
    !ScrolledIntoView(se5) &&!ScrolledIntoView(se6)  && !ScrolledIntoView(se7) && !ScrolledIntoView(se8) &&
!ScrolledIntoView(se9))document.getElementById("bd").className="";

     if (!ScrolledIntoView(se1)) document.getElementById("dot1").classList.remove("active");
     if (!ScrolledIntoView(se2)) document.getElementById("dot2").classList.remove("active");
     if (!ScrolledIntoView(se3)) document.getElementById("dot3").classList.remove("active");	  
     if (!ScrolledIntoView(se4)) document.getElementById("dot4").classList.remove("active");	
     if (!ScrolledIntoView(se5)) document.getElementById("dot5").classList.remove("active");	
     if (!ScrolledIntoView(se6)) document.getElementById("dot6").classList.remove("active");
     if (!ScrolledIntoView(se7)) document.getElementById("dot7").classList.remove("active");
     if (!ScrolledIntoView(se8)) document.getElementById("dot8").classList.remove("active");
     if (!ScrolledIntoView(se9)) document.getElementById("dot9").classList.remove("active");
			 
			 
			 
			 
			 
			 }
 