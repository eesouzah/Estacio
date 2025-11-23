import { TestBed } from '@angular/core/testing';

import { ControleLivros }  from './controle-livros.service';

describe('ControleLivros', () => {
  let service: ControleLivros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLivros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
