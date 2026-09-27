import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carrinho } from './carrinho';
import { Carrinho as CarrinhoService } from '../../services/carrinho';

describe('Carrinho', () => {
  let component: Carrinho;
  let fixture: ComponentFixture<Carrinho>;
  let service: CarrinhoService;

  const produto = {
    id: 1,
    title: 'Produto teste',
    price: 100,
    image: 'imagem-teste.jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrinho],
    }).compileComponents();

    fixture = TestBed.createComponent(Carrinho);
    component = fixture.componentInstance;
    service = TestBed.inject(CarrinhoService);

    service.remover(produto.id);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os itens do carrinho', () => {
    service.adicionar(produto);

    component.ngOnInit();

    expect(component.itens.length).toBe(1);
    expect(component.itens[0].title).toBe('Produto teste');
  });

  it('deve calcular o total ao carregar o carrinho', () => {
    service.adicionar(produto);
    service.aumentarQuantidade(produto.id);

    component.ngOnInit();

    expect(component.total).toBe(200);
  });

  it('deve aumentar a quantidade de um produto', () => {
    service.adicionar(produto);
    component.ngOnInit();

    component.aumentarQuantidade(produto.id);

    expect(component.itens[0].quantidade).toBe(2);
    expect(component.total).toBe(200);
  });

  it('deve diminuir a quantidade de um produto', () => {
    service.adicionar(produto);
    service.aumentarQuantidade(produto.id);
    component.ngOnInit();

    component.diminuirQuantidade(produto.id);

    expect(component.itens[0].quantidade).toBe(1);
    expect(component.total).toBe(100);
  });

  it('deve remover um produto do carrinho', () => {
    service.adicionar(produto);
    component.ngOnInit();

    component.remover(produto.id);

    expect(component.itens.length).toBe(0);
    expect(component.total).toBe(0);
  });
});