import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfildesortieComponent } from './profildesortie.component';

describe('ProfildesortieComponent', () => {
  let component: ProfildesortieComponent;
  let fixture: ComponentFixture<ProfildesortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfildesortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfildesortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
