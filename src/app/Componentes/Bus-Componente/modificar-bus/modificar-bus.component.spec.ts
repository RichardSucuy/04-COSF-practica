import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBusComponent } from './modificar-bus.component';

describe('ModificarBusComponent', () => {
  let component: ModificarBusComponent;
  let fixture: ComponentFixture<ModificarBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
