import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroLista } from './livro-lista';

describe('LivroLista', () => {
  let component: LivroLista;
  let fixture: ComponentFixture<LivroLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
