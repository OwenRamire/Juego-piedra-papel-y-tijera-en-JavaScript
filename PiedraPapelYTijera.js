function maquina() // Utilizacion de numeros aleatorios para la eleccion de la maquina 
{
    /*para la maquina
        1 = piedra
        2 = papel
        3 = tijera
    */ 
    return Math.floor(Math.random() * (4 - 1) + 1);
}
 
var ganados=0, perdidos=0,empate=0; //variables para el control del marcador 

function opcionUsuario(opc)
{
    var opcMaquina = maquina();
    parseInt(opcMaquina);
    switch(parseInt(opc))
    {
        case 0://piedra usuario
            {
                if (opcMaquina == 1)
                {
                    alert("Escogiste Piedra \nLa maquina escojio piedra");
                    alert("Empate");
                    empate++;
                    break;
                }
                else if(opcMaquina == 2)
                {
                    alert("Escogiste Piedra \nLa maquina escojio papel");
                    alert("Perdiste");
                    perdidos++;
                    break;
                }
                else
                {
                    alert("Escogiste Piedra \nLa maquina escojio tijeras");
                    alert("Ganaste");
                    ganados++;
                    break;
                }
            }
        case 1://papel usuario
            {
                if (opcMaquina == 1)
                {
                    alert("Escogiste Papel \nLa maquina escojio piedra");
                    alert("Ganaste");
                    ganados++;
                    break;
                }
                else if(opcMaquina == 2)
                {
                    alert("Escogiste Papel \nLa maquina escojio papel");
                    alert("Empate");
                    empate++;
                    break;
                }
                else
                {
                    alert("Escogiste Papel \nLa maquina escojio tijeras");
                    alert("Perdiste");
                    perdidos++;
                    break;
                }
            }
        case 2://tijeras usuario
            {
                if (opcMaquina == 1)
                {
                    alert("Escogiste ijeras \nLa maquina escojio piedra");
                    alert("Perdiste");
                    perdidos++;
                    break;
                }
                else if(opcMaquina == 2)
                {
                    alert("Escogiste Tijeras \nLa maquina escojio papel");
                    alert("Ganaste");
                    ganados++;
                    break;
                }
                else
                {
                    alert("Escogiste Tijeras \nLa maquina escojio tijeras");
                    alert("Empate");
                    empate++;
                    break;
                }
            }

    }
    document.getElementById("ganados").innerHTML = "<p>Ganados: " + ganados +"</p>";
    document.getElementById("perdidos").innerHTML = "<p>Perdidos: " +perdidos + "</p>";
    document.getElementById("empatados").innerHTML = "<p>Empatados: " + empate + "</p>";
}