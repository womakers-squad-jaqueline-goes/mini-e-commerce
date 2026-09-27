import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Produto } from '../../services/produto';
import { Carrinho } from '../../services/carrinho';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-produto-lista',
  styleUrl: './produto-lista.css',
  templateUrl: './produto-lista.html',
})
export class ProdutoLista implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: Produto,
    private carrinho: Carrinho,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.produtoService.buscarProdutos().subscribe({
      next: (produtos) => {
        this.produtos = [...produtos];
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('ERRO AO BUSCAR PRODUTOS:', erro);
      }
    });
  }

adicionarAoCarrinho(produto: any): void {
  this.carrinho.adicionar(produto);
  console.log(`Produto adicionado ao carrinho: ${produto.title}`);
}

  trackByProdutoId(index: number, produto: any) {
    return produto?.id ?? index;
  }
}
