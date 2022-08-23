import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InicialEditComponent} from './inicial-edit.component';

describe('InicialEditComponent', () => {
  let component: InicialEditComponent;
  let fixture: ComponentFixture<InicialEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicialEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InicialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
