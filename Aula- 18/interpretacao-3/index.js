
// Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?

// Na primeira linha do console apareceria '*'
// Na segunda linha apareceria '**'
// Na terceira linha apareceria '***'
// Na quarta linha apareceria '****'


let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}
