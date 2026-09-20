import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Produto {
    constructor(private http: HttpClient) { }

    buscarProdutos() {
        return this.http.get<any[]>(`https://fakestoreapi.com/products`);
    }

}