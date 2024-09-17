nome = prompt("Informe o seu nome: ");

nota1 = prompt("Informe a nota n° 1: ");
nota2 = prompt("Informe a nota n° 2: ");
nota3 = prompt("Informe a nota n° 3: ");
nota4 = prompt("Informe a nota n° 4: ");

mediaArit = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4).toFixed(2);

alert(`Aluno(a): ${nome}` + `\nSua media: ${mediaArit} `);