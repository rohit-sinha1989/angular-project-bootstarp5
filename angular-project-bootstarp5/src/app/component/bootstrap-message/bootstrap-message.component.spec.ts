import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMessageComponent } from './bootstrap-message.component';

describe('BootstrapMessageComponent', () => {
  let component: BootstrapMessageComponent;
  let fixture: ComponentFixture<BootstrapMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
