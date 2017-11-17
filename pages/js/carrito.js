var pedido=[];
		var muebles=[['Mueble1',10],['Mueble2',20],['Mueble3',30],['Mueble4',40],['Mueble5',50],['Mueble6',60],['Mueble7',70],['Mueble8',80],['Mueble9',90],['Mueble10',100]];
		
		var myJSON = JSON.stringify(pedido);
				
			console.log(myJSON)
		
			document.getElementById("myId").innerHTML = pedido;

function mueble1(indice) 
	{
								
				if (confirm('Are you sure you want to add this item to the car?')) {
					pedido.push(muebles[indice]);
					document.getElementById("myId").innerHTML = pedido;
					
					sessionStorage.setItem('valorMuebles',pedido);
				} else {
				
				
				}
				
				
	}