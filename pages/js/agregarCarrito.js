var pedido=[];
var muebles=[['Sillón con estantería Cojines de tela futón',5499],['Sillón con escritorio Madera de cataño',9999],['Estanteria con escritorio plegable',1500],['Archivero con mesa plegable',2499],['Sillón multiusos ',3999],['Archivero con mesa escondida',3750],['Sillón con estanteria y lámpara',3325],['Sillón con mesa de centro guardable',4050],['Estantería con escritorio plegable',1275],['Archivero con sillas escondidas',4122.50]];
		
var myJSON = JSON.stringify(pedido);
				
		console.log(myJSON)
		
		//document.getElementById("myId").innerHTML = pedido;

function agregarAlCarro(indice) 
{
								
				if (confirm('Are you sure you want to add this item to the car?')) {
					pedido.push(indice);
					//document.getElementById("myId").innerHTML = pedido;
					
					sessionStorage.setItem('valorMuebles',pedido);
					console.log(pedido)
					
				} else {
				

				}							
}


