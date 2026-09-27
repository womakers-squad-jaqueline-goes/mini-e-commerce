import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from '../../models/produto-model';
import { Produto } from '../../services/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit {
  produto?: ProdutoModel;
  mensagem = '';
  tipoMensagem: 'sucesso' | 'erro' = 'sucesso';

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private produtoService: Produto,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.buscarProdutoPorId(id).subscribe({
      next: (produto) => {
        this.produto = produto;
        this.changeDetectorRef.detectChanges();
      },
      error: (erro) => {
        this.exibirMensagem('Não foi possível carregar o produto.', 'erro');
        this.changeDetectorRef.detectChanges();
      },
    });
  }

  adicionarAoCarrinho() {
    if (!this.produto) {
      this.exibirMensagem('Não foi possível adicionar o produto ao carrinho.', 'erro');
      return;
    }

    this.exibirMensagem('Produto adicionado ao carrinho com sucesso!', 'sucesso');
  }

  private exibirMensagem(mensagem: string, tipo: 'sucesso' | 'erro') {
    this.mensagem = mensagem;
    this.tipoMensagem = tipo;

    setTimeout(() => {
      this.mensagem = '';
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }
}
