import { colors } from "./src/util/Colors"
import leia = require("readline-sync")
import { sobre } from "./src/util/sobre"
import { ProdutoController } from "./src/Controller/ProdutoController"
import { ProdutosCabelo } from "./src/model/ProdutosCabelo"
let opcao, numero: number
let nomeDoProduto, tipoDeCabelo, tipo: string
let produtos: ProdutoController = new ProdutoController

do {
    console.log(`${colors.fg.magenta}`)
    console.log(`===================================================`)
    console.log(`                   Salão B.A                       `)
    console.log(`===================================================`)
    console.log(`                                                   `)
    console.log(`1- Cadrastrar Produtos: `)
    console.log(`2- Mostrar todos os produtos: `)
    console.log(`3- Buscar produtos por ID: `)
    console.log(`4- Atualizar dados do produto: `)
    console.log(`5- Deletar produto:  `)
    console.log(`0- Sair `)

    opcao = leia.questionInt("\nDigite a opcao: ")
    switch (opcao) {
        case 1:
            console.log("Cadrastrar Produtos: ")
            console.log(`Digite o tipo de Produto\n`)
            console.log(`1 - Produtos de cabelo`)
            tipo = leia.question("Digite o numero: ")
            nomeDoProduto = leia.question(`Digite o nome do produto: `)
            tipoDeCabelo = leia.question(`Digite o tipo de cabelo: `)
            switch (tipo) {
                case "1":
                    tipo = "Produtos de cabelo"
                    produtos.cadastrar(new ProdutosCabelo(produtos.gerarId(), tipo, nomeDoProduto, tipoDeCabelo))
                    break
                default:
                    console.log("Digite a opcao valida!")
                    break
            }
            break
        case 2:
            console.log("Mostrar todos os produtos: ")
            produtos.listarTodos()
            break

        case 3:
            console.log("Buscar produtos por ID: ")
            numero = leia.questionInt("\nDigite o numero de ID do produto: ")
            produtos.procurarPorId(numero)
            break

        case 4:
            console.log("Atualizar dados do produto: ")
            numero = leia.questionInt(`\nDigite o ID do Produto: `)
            console.log("Cadrastrar Produtos: ")
            console.log("Digite o tipo de Produto\n")
            console.log("1 - Produtos de cabelo")
            tipo = leia.question("Digite um numero: ")
            nomeDoProduto = leia.question(`Digite o nome do produto: `)
            tipoDeCabelo = leia.question(`Digite o tipo de cabelo: `)
            switch (tipo) {
                case "1":
                    tipo = "Produtos de cabelo"
                    produtos.cadastrar(new ProdutosCabelo(produtos.gerarId(), tipo, nomeDoProduto, tipoDeCabelo))
                    break
                default:
                    console.log("Digite a opcao valida.")
                    break
            }
            break

        case 5:
            console.log("Deletar produto: ")
            numero = leia.questionInt(`Digite o Id do produto: `)
            produtos.deletar(numero)
            break

        case 0:
            console.log("Sair")
            sobre()
            break
        default:
            console.log("Digite uma opcao valida!!!!!")
            break

    }

}
while (opcao !== 0)