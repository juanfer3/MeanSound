import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasDetailComponent } from './artistas-detail.component';

describe('ArtistasDetailComponent', () => {
  let component: ArtistasDetailComponent;
  let fixture: ComponentFixture<ArtistasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
