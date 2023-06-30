// Participantes: Henrique Ribeiro, Iago Pinheiro, João Silveira, João Ribas.

//modulo que permite lidar com entrada e saída, podemos atrelar um readable stream no input e output padrão. 
const readline = require("readline")


// Faz a leitura do input do usuário sem a utilização do prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Declaramos as variaveis
let ranking = []
let ascendenteOrdem = true

//percorre a lista ranking e imprime cada elemento, juntamente com o seu número de posição. Na ordem definida: asc ou desc.
function printRanking() {
  console.log('Ranking:')
  if (ascendenteOrdem) {
    for (let i = 0; i < ranking.length; i++) {
        console.log(`${i + 1}. ${ranking[i]}`)
    }
  } else {
    for (let i = ranking.length - 1; i >= 0; i--) {
        console.log(`${ranking.length - i}. ${ranking[i]}`) // `${} facilita concatenação entre String e variaveis
      }
  }
}

// Solicita para o usuário inserir os elementos
function insereElemento() {
  rl.question('Digite o elemento a ser inserido: ', (element) => {
    ranking.push(element)
    ranking.sort()
    printRanking()
    rl.prompt()
  });
}

// Faz a alteração de elementos conforme escolha do usuário
function alteraElemento() {
  rl.question('Digite o índice do elemento a ser alterado: ', (index) => {
    if (index >= 1 && index <= ranking.length) {
      rl.question('Digite o novo valor do elemento: ', (newValue) => {
        ranking[index - 1] = newValue
        ranking.sort()
        printRanking()
        rl.prompt()
      })
    } else {
      console.log('Índice inválido!')
      rl.prompt()
    }
  })
}

// Remove elemento conforme escolha do usuário
function removeElemento() {
  rl.question('Digite o elemento a ser removido: ', (index) => {
    if (index >= 1 && index <= ranking.length) {
      ranking.splice(index - 1, 1) // splice adiciona elementos enquanto remove elementos
      printRanking()
      rl.prompt()
    } else {
      console.log('Índice inválido!')
      rl.prompt()
    }
  })
}

// Organiza a lista após a inserção de elementos no Ranking
function orgOrdem() {
  ascendenteOrdem = !ascendenteOrdem
  ranking.reverse()
  printRanking()
  rl.prompt()
}

// Define a ordem do ranking (ascendente ou descendente)
function defineOrdem() {
  rl.question('Escolha a ordem do ranking (ascendente ou descendente): ', (ordem) => {
    if (ordem.toLowerCase() === 'ascendente') {
      ascendenteOrdem = true
      ranking.sort()
      printRanking()
    } else if (ordem.toLowerCase() === 'descendente') {
      ascendenteOrdem = false
      ranking.reverse // Classifica em ordem descendente
      printRanking();
    } else {
      console.log('Ordem inválida!')
    }
    rl.prompt()
  });
}

function menu() {
  console.log('Menu:')          
  console.log('1. Inserir') 
  console.log('2. Alterar') 
  console.log('3. Remover')
  console.log('4. Ordenação (atual: ' + (ascendenteOrdem ? 'crescente' : 'decrescente') + ')')
  console.log('5. Definir ordem (atual: ' + (ascendenteOrdem ? 'ascendente' : 'descendente') + ')')
  console.log('0. Sair')    
  rl.prompt()
}

rl.on('line', (input) => {
  switch (input.trim()) {
    case '0':
      rl.close()
      break
    case '1':
      inserirElement()
      break
    case '2':
      alteraElement()
      break
    case '3':
      removeElement()
      break
    case '4':
      orgOrdem()
      break
    case '5':
      definirOrdem()
      break
    default:
      console.log('Opção inválida!')
      rl.prompt()
      break
  }
});

console.log('Bem-vindo ao sistema de ranking!')
menu()
