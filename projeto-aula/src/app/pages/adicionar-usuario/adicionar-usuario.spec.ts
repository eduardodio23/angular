import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarUsuario } from './adicionar-usuario';

describe('AdicionarUsuario', () => {
  let component: AdicionarUsuario;
  let fixture: ComponentFixture<AdicionarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
