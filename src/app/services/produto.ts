import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoModel } from '../models/produto-model';

@Injectable({
    providedIn: 'root'
})
export class Produto {
    constructor(private http: HttpClient) { }

    buscarProdutos() {
        return this.http.get<any[]>(`https://fakestoreapi.com/products`);
    }

    buscarProdutoPorId(id: number) {
        return this.http.get<ProdutoModel>(`https://fakestoreapi.com/products/${id}`);
    }

}