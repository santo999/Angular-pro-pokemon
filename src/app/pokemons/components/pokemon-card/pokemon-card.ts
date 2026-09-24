import { Component, computed, input } from '@angular/core';
import { Result } from '../../interfaces/pokemon-api.response';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-card',
  styleUrl: './pokemon-card.css',
  templateUrl: './pokemon-card.html',
})
export class PokemonCard {

  pokemon = input.required<SimplePokemon>();


  public readonly pokemonImage = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${this.pokemon().id}.png`
  })


}
