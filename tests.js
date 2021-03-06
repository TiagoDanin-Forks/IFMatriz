const antisimetrica = require('./operacoes/antisimetrica')
const determinante = require('./operacoes/determinante')
const identidade = require('./operacoes/identidade')
const igualdade = require('./operacoes/igualdade')
const multiplicacao = require('./operacoes/multiplicacao')
const produto = require('./operacoes/produto')
const simetrica = require('./operacoes/simetrica')
const soma = require('./operacoes/soma')
const subtracao = require('./operacoes/subtracao')
const transposta = require('./operacoes/transposta')
const assert = require('assert')

const criarMatriz = (ordem, fazer) => {
	let matriz = []
	let n = 0
	for (let l = 0; l < ordem; l++) {
		matriz[l] = []
		for (let c = 0; c < ordem; c++) {
			n++
			matriz[l][c] = Math.round(fazer(n, l, c))
		}
	}
	return matriz
}

const a = criarMatriz(2, (n, l, c) => {
	return n
})
console.log('A=', a)

const b = criarMatriz(3, (n, l, c) => {
	return n
})
console.log('B=', b)

const c = criarMatriz(5, (n, l, c) => {
	if (n % 2 == 0) {
		return n * (l + c)
	}
	return 2 + n
})
console.log('C=', c)

const d = criarMatriz(6, (n, l, c) => {
	if (n % 2 == 0) return -l
	return n - c
})
console.log('D=', d)

const e = criarMatriz(4, (n, l, c) => {
	if (l == c) return 1
	return 0
})
console.log('E=', e)

const f = [
	[2, 3, 5],
	[3, 4, 8],
	[5, 8, -9]
]
console.log('F=', f)

const g = criarMatriz(2, (n, l, c) => {
	return -1 * n
})
console.log('G=', g)

const h = [
	[0, 4, -5],
	[-4, 0, 8],
	[5, -8, 0]
]
console.log('H=', h)

console.log('Ant(a)=', antisimetrica(a))
assert.equal(antisimetrica(a), false)
console.log('Ant(h)=', antisimetrica(h))
assert.equal(antisimetrica(h), true)

console.log('Det(a)=', determinante(a))
assert.equal(determinante(a), -2)
console.log('Det(b)=', determinante(b))
assert.equal(determinante(b), 0)
console.log('Det(c)=', determinante(c))
assert.equal(determinante(c), -860160)
console.log('Det(d)=', determinante(d))
assert.equal(determinante(d), 0)

console.log('Ide(a)=', identidade(a))
assert.equal(identidade(a), false)
console.log('Ide(e)=', identidade(e))
assert.equal(identidade(e), true)

console.log('Igu(a, a)=', igualdade(a, a))
assert.equal(igualdade(a, a), true)
console.log('Igu(a, b)=', igualdade(a, b))
assert.equal(igualdade(a, b), false)

console.log('-1 * a=', multiplicacao(a, -1))
assert.equal(JSON.stringify(multiplicacao(a, -1)), JSON.stringify(g))

console.log('a * a=', produto(a, a))
assert.equal(JSON.stringify(produto(a, a)), JSON.stringify([[7,10],[15,22]]))

console.log('Sim(f)=', simetrica(f))
assert.equal(simetrica(f), true)
console.log('Sim(a)=', simetrica(a))
assert.equal(simetrica(a), false)

console.log('a+a=', soma(a, a))
assert.equal(JSON.stringify(soma(a, a)), JSON.stringify([[2,4],[6,8]]))

console.log('c-c=', subtracao(c, c, true))
assert.equal(JSON.stringify(subtracao(a, a)), JSON.stringify([[0,0],[0,0]]))

console.log('Tra(a)=', transposta(a))
assert.equal(JSON.stringify(transposta(a)), JSON.stringify([[1,3], [2,4]]))
