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

    }
    cadrastar(produtos: Produtos): void {
        this.listaProdutos.push (produtos)
        console.log(`Produto Id: ${produtos.id} cadastrado com sucesso!`)
    }
    atualizar(produtos: Produtos): void {

    }
    deletar(id: number): void {

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