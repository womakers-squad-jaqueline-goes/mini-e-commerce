import { Routes } from '@angular/router';

import { ProdutoLista } from './component/produto-lista/produto-lista';
import { Carrinho } from './component/carrinho/carrinho';
import { Checkout } from './component/checkout/checkout';

export const routes: Routes = [
  {
    path: '',
    component: ProdutoLista
  },
  
  {
    path: 'carrinho',
    component: Carrinho
  },
  
  {
    path: 'checkout',
    component: Checkout
  }
];