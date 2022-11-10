import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCandidatosComponent } from './agregar-candidatos.component';

describe('AgregarCandidatosComponent', () => {
  let component: AgregarCandidatosComponent;
  let fixture: ComponentFixture<AgregarCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCandidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
