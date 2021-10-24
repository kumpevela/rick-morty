import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacionesContentComponent } from './localizaciones-content.component';

describe('LocalizacionesContentComponent', () => {
  let component: LocalizacionesContentComponent;
  let fixture: ComponentFixture<LocalizacionesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizacionesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacionesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
