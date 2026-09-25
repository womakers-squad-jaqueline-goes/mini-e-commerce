import { TestBed } from '@angular/core/testing';
import { Carrinho } from './carrinho';

describe('Carrinho', () => {
  let service: Carrinho;

  const produto = {
    id: 1,
    title: 'Produto teste',
    price: 100,
    image: 'imagem-teste.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carrinho);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um produto ao carrinho', () => {
    service.adicionar(produto);

    expect(service.listar().length).toBe(1);
    expect(service.listar()[0].title).toBe('Produto teste');
    expect(service.listar()[0].quantidade).toBe(1);
  });

  it('deve aumentar a quantidade quando o mesmo produto for adicionado novamente', () => {
    service.adicionar(produto);
    service.adicionar(produto);

    expect(service.listar().length).toBe(1);
    expect(service.listar()[0].quantidade).toBe(2);
  });

  it('deve aumentar a quantidade de um produto', () => {
    service.adicionar(produto);

    service.aumentarQuantidade(1);

    expect(service.listar()[0].quantidade).toBe(2);
  });

  it('deve diminuir a quantidade de um produto', () => {
    service.adicionar(produto);
    service.aumentarQuantidade(1);

    service.diminuirQuantidade(1);

    expect(service.listar()[0].quantidade).toBe(1);
  });

  it('não deve permitir quantidade menor que 1', () => {
    service.adicionar(produto);

    service.diminuirQuantidade(1);

    expect(service.listar()[0].quantidade).toBe(1);
  });

  it('deve remover um produto do carrinho', () => {
    service.adicionar(produto);

    service.remover(1);

    expect(service.listar().length).toBe(0);
  });

  it('deve calcular o total corretamente', () => {
    service.adicionar(produto);
    service.aumentarQuantidade(1);

    expect(service.calcularTotal()).toBe(200);
  });
});