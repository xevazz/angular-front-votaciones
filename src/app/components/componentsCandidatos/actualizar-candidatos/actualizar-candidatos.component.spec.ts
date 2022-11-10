import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCandidatosComponent } from './actualizar-candidatos.component';

describe('ActualizarCandidatosComponent', () => {
  let component: ActualizarCandidatosComponent;
  let fixture: ComponentFixture<ActualizarCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCandidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
