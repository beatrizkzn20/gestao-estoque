import { Produtos } from "../model/Produtos";
import { ProdutoRepository } from "../Repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produtos> = new Array<Produtos>
    id: number = 0

    procurarPorId(id: number): void {
        let buscarId = this.buscarNoArray(id)
        if (buscarId !== null) buscarId.visualizar()
        else {
            console.log(`O produto: ${id} nao foi encontrado`)
        }
    }
    listarTodos(): void {
        for (let Produtos of this.listaProdutos)
            Produtos.visualizar()
    }
    cadastrar(produtos: Produtos): void {
        this.listaProdutos.push(produtos)
        console.log(`Produto Id: ${produtos.id} cadastrado com sucesso!`)
    }
    atualizar(produtos: Produtos): void {
        let buscarProduto = this.buscarNoArray(produtos.id)
        if (buscarProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)]
            console.log("Produto ID: ${ produto.id } atualizado com sucesso!")
        } else {
            console.log("Produto ID: ${ produto.id } nao ofi encontrado!")
        }
    }
    deletar(id: number): void {
        let buscarProduto = this.buscarNoArray(id)
        if (buscarProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto))
            console.log("O Produto ID: ${ id } foi deletado com Secesso!")
        } else {
            console.log(`O Produto ID: ${id} não foi encontrado! `)
        }
    }
    public buscarNoArray(id: number): Produtos | null {
        for (let produtos of this.listaProdutos) {
            return produtos
        } return null
    }
    public gerarId(): number {
        return ++this.id
    }
}