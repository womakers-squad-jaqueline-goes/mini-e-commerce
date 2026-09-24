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

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.listar();
  }
}