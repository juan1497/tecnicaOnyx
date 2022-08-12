alert("Piensa un Objeto :\n -Pizza Entera \n -Manzana\n -Hamburguesa\n -Llanta \n -Balon de Voleibol \n -Balon de Baloncesto \n -Balon de Futbol")
if(confirm("¿Es comestible?")){
    if(confirm("¿Es una Fruta?")){
        alert('Es la Manzana')
    }else if(confirm("¿Tiene Lechuga?")){
        alert('Es la Hamburguesa')
    }else {
        alert("Es la Pizza Entera")
    }
}else if(confirm("¿Es para Jugar?")){
    if(confirm('¿Se Juega con los Pies?')){
        alert("Es Balon de Futbol")
    }else if(confirm("¿Es de varios colores?")){
        alert('Es balon de voleibol')
    }else{
        alert("Es balon de baloncesto")
    }
}else{
    alert("Es una Llanta")
}