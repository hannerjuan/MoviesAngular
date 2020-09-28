import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditionComponent } from './movie-edition.component';

describe('MovieEditionComponent', () => {
  let component: MovieEditionComponent;
  let fixture: ComponentFixture<MovieEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
