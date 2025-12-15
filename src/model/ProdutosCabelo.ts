import { Produtos } from "./Produtos";

export class ProdutosCabelo extends Produtos{

    private _tipoDeCabelo : string
    
    constructor (id:number, tipo:string, nome:string, tipoDeCabelo:string){
    super (id,tipo, nome)
    this._tipoDeCabelo = tipoDeCabelo
    }
 public get tipoDeCabelo(): string{
    return this._tipoDeCabelo
 }
 public set tipoDeCabelo(tipoDeCabelo: string) {
    this._tipoDeCabelo = tipoDeCabelo
 }
 public visualizar(): void {
    super.visualizar ()
     console.log(`Tipo de Cabelo: ${this.tipoDeCabelo}`)
 }
}