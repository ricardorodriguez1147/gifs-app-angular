import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsCardsComponent } from './gifs-cards.component';

describe('GifsCardsComponent', () => {
  let component: GifsCardsComponent;
  let fixture: ComponentFixture<GifsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
