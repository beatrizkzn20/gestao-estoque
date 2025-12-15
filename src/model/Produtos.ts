export abstract class Produtos {
    
    private _id:number 
    private _tipo: string
    private _nome: string

    constructor (id:number, tipo:string, nome:string){
        this._id = id 
        this._tipo = tipo
        this._nome = nome
    }
 public get id(): number{
    return this._id
 }
 public set id(id: number) {
    this._id = id
 }
 public get nome(): string{
    return this._nome
 }
 public set nome(nome: string) {
    this._nome = nome
 }
 public get tipo(): string {
    return this._tipo
 }
 public set tipo(tipo: string){
    this.tipo = tipo
 }
 public visualizar () :void{
    console.log (`id: ${this._id}`)
    console.log (`tipo: ${this._tipo}`)
    console.log (`nome: ${this._nome}`)
 }
 }
