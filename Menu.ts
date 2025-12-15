import { colors } from "./src/util/Colors"
import leia = require("readline-sync")
import { sobre } from "./src/util/sobre"
import { Produtos } from "./src/model/Produtos"
import { ProdutoController } from "./src/Controller/ProdutoController"
let opcao, numero, tipo: number
let nomeDoProduto: string

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
            tipo = leia.questionInt("")
            nomeDoProduto = leia.question(`Digite o nome do produto: `)
            switch (tipo) {
                case 1:
                    tipo = "Produtos de cabelo"
                    Produtos.
                    break
                default:
                    console.log("Digite a opcao valida.")
                    break
            }
            break
        case 2:
            console.log("Mostrar todos os produtos: ")
            break

        case 3:
            console.log("Buscar produtos por ID: ")
            numero = leia.questionInt("\nDigite o numero de ID do produto: ")
            Produtos.procuraPorId(numero)
            break

        case 4:
            console.log("Atualizar dados do produto: ")
            break

        case 5:
            console.log("Deletar produto: ")
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