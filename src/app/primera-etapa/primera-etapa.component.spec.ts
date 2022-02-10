import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraEtapaComponent } from './primera-etapa.component';

describe('PrimeraEtapaComponent', () => {
  let component: PrimeraEtapaComponent;
  let fixture: ComponentFixture<PrimeraEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
