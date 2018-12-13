var x;
x=$(document);
x.ready(inicializar);

function inicializar(){
	x=$("#reser").click(mostrarRer);
	x=$("#duda").click(mostrarCons);
	x=$(".cartel").hover(solido, opacidad);
	

	var tiempo_inicio_anim = 200;  
	var tiempo_entre_img = 3000;  
	var tiempo_fade = 1000;  

	function animacion_simple() {  
  
		// Mostramos la foto 1 
			var x;	
			x=$(".foto1");
			x.fadeIn(tiempo_fade);		
	   
  
		// Cuando pasen otros 3000 milisegundos, ocultamos la foto 1 y mostramos la foto 2  
		setTimeout(function() {  
			// Ocultamos la foto 1 
			var x;	
			x=$(".foto1");
			x.fadeOut(tiempo_fade);			
		   
			// Mostramos la foto 2 
			var x;	
			x=$(".foto2");
			x.fadeIn(tiempo_fade);	
			}, tiempo_entre_img);      
		// Cuando pasen otros 3000 milisegundos, ocultamos la foto 2 y mostramos la foto 3
		setTimeout(function() {  
			// Ocultamos la foto 2 
			var x;	
			x=$(".foto2");
			x.fadeOut(tiempo_fade);				
		   
			// Mostramos la foto 3 
			var x;	
			x=$(".foto3");
			x.fadeIn(tiempo_fade);	
			}, tiempo_entre_img*2);
					  
		// Cuando pasen otros 3000 milisegundos, ocultamos la foto 3 y volvemos a iniciar la animación  
		setTimeout(function() {  
			// Ocultamos la foto 3  
			var x;	
			x=$(".foto3");
			x.fadeOut(tiempo_fade);	 
			// Iniciamos otra vez la animación cuando pase 3 veces el tiempo entre imagens  
			animacion_simple();  
		}, tiempo_entre_img*3);  
  
	}  
  
	//Empezamos la animación a los 200 milisegundos  
	setTimeout(function() {  
		animacion_simple();  
	}, tiempo_inicio_anim);  
  
}



function validar(){
	var priv= document.getElementById("ppi").checked;
	// alert(priv);

	if(priv==false){
		document.getElementById("error").style.display="block";
			return false;
	} else{
		document.getElementById("error").style.display="none";
	}
}

function mostrarPolit(){
	window.location= "#pp";
}

function mostrarRer(){

	x=$("#reserva").css("display","block");
 	x=$("#consulta").css("display","none");
 	x=$("#botonReser").css("display","block");
 	x=$("#botonEnvia").css("display","none");
}

function mostrarCons(){
	x=$("#reserva").css("display","none");
 	x=$("#consulta").css("display","block");
 	x=$("#botonReser").css("display","none");
 	x=$("#botonEnvia").css("display","block");
}

function solido(){

	x=$(this).css("background", "rgba(255,255,255, 1)");
	x=$(this).css("transition", "2s");

}

function opacidad(){

	x=$(this).css("background", "rgba(255,255,255, 0.8)");
	x=$(this).css("transition", "2s");

}