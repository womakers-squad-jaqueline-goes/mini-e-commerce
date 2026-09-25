import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Carrinho {
  private itens: any[] = [];

  adicionar(produto: any): void {
    const itemExistente = this.itens.find(item => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      this.itens.push({
        ...produto,
        quantidade: 1
      });
    }
  }

  aumentarQuantidade(id: number): void {
    const item = this.itens.find(item => item.id === id);

    if (item) {
      item.quantidade += 1;
    }
  }

  diminuirQuantidade(id: number): void {
    const item = this.itens.find(item => item.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade -= 1;
    }
  }

  remover(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
  }

  listar(): any[] {
    return this.itens;
  }

  calcularTotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.price * item.quantidade,
      0
    );
  }
}