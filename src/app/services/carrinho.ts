import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Carrinho {
  private itens: any[] = [];

  adicionar(produto: any): void {
    this.itens.push(produto);
  }

  listar(): any[] {
    return this.itens;
  }
}