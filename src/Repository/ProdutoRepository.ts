import { Produtos } from "../model/Produtos"

export interface ProdutoRepository {
    procurarPorId(id: number): void
    listarTodos(): void
    cadrastrar(produtos: Produtos): void
    atualizar(produtos: Produtos): void
    deletar(id: number): void
}