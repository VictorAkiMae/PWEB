var soma = 0; 
for (var i=2; i<=process.argv.length-1; i++) 
 soma=soma+Number(process.argv[i]); 
console.log("soma="+soma); 


//argv baseado nos argumentos da linha de comando, captura e usa os valoresS