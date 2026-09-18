import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Produto } from './produto';

describe('Produto', () => {
  let service: Produto;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Produto);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load products from the API', () => {
    const products = [{ id: 1, title: 'Produto teste' }];

    service.buscarProdutos().subscribe((result) => {
      expect(result).toEqual(products);
    });

    const request = http.expectOne('https://fakestoreapi.com/products');
    expect(request.request.method).toBe('GET');
    request.flush(products);
  });
});
