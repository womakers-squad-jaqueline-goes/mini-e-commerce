import { Routes } from '@angular/router';

import { ProdutoLista } from './component/produto-lista/produto-lista';
import { Checkout } from './component/checkout/checkout';

export const routes: Routes = [

  {
    path: '',
    component: ProdutoLista
  },

  {
    path: 'checkout',
    component: Checkout
  }

];