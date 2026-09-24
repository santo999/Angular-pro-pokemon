import { Component, input } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';

@Component({
  imports: [PokemonCard],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {

  pokemons = input.required<SimplePokemon[]>();
}
