import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListSkeletor } from './pokemon-list-skeletor';

describe('PokemonListSkeletor', () => {
  let component: PokemonListSkeletor;
  let fixture: ComponentFixture<PokemonListSkeletor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListSkeletor],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListSkeletor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
