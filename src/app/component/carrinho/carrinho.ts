import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Carrinho as CarrinhoService } from '../../services/carrinho';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-carrinho',
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho implements OnInit {
  itens: any[] = [];
  total = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.listar();
    this.total = this.carrinhoService.calcularTotal();
  }

  aumentarQuantidade(id: number): void {
    this.carrinhoService.aumentarQuantidade(id);
    this.total = this.carrinhoService.calcularTotal();
  }

  diminuirQuantidade(id: number): void {
    this.carrinhoService.diminuirQuantidade(id);
    this.total = this.carrinhoService.calcularTotal();
  }

  remover(id: number): void {
    this.carrinhoService.remover(id);
    this.itens = this.carrinhoService.listar();
    this.total = this.carrinhoService.calcularTotal();
  }
}