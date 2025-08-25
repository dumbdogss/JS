var cont

cont=0

while(cont<2)
{
    alert("Irritando o usuário com while "+cont +" vezes")
    cont++
}

for(cont=0;cont<2;cont++)
{
    alert("Agora irritando com for "+cont+ " vezes")
}

var resposta

do{
    resposta=confirm("Deseja continuar?")
}while(resposta==true)