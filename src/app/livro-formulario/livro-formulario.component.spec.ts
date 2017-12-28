import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroFormularioComponent } from './livro-formulario.component';

describe('LivroFormularioComponent', () => {
  let component: LivroFormularioComponent;
  let fixture: ComponentFixture<LivroFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
