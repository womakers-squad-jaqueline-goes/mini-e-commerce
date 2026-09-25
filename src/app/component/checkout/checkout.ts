import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './checkout.html',

  styleUrl: './checkout.css'
})
export class Checkout {

  checkoutForm: FormGroup;

  pedidoFinalizado = false;

  constructor(private fb: FormBuilder) {

    this.checkoutForm = this.fb.group({

      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      endereco: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]

    });

  }

  finalizarPedido(): void {

    if (this.checkoutForm.invalid) {

      this.checkoutForm.markAllAsTouched();

      return;
    }

    this.pedidoFinalizado = true;

    console.log(this.checkoutForm.value);

  }

  get nome() {

    return this.checkoutForm.get('nome');

  }

  get endereco() {

    return this.checkoutForm.get('endereco');

  }

}