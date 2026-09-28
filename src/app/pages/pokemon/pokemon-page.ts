import { Component, effect, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-pokemon-page',
  styleUrl: './pokemon-page.css',
  templateUrl: './pokemon-page.html',
})
export default class PokemonPage {

  private pokemonService = inject(PokemonService);
  private title = inject(Title);
  private metatag = inject(Meta);

  public pokemonId = input('', {//Con esto tenemos acceso a los query Params, Route params, Data/Resolvers del route
    alias: 'id'
  });


  pokemonResourse = rxResource({
    params: () => ({ 'id': this.pokemonId() }),
    stream: ({ params }) => {
      return this.pokemonService.LoadPokemon(params.id).pipe(
        tap(({ id, name }) => {
          const pageTitle = `#${id} - ${name}`;
          const description = `Página del pokemon ${name}`;

          this.title.setTitle(pageTitle);
          this.metatag.updateTag({ name: 'description', content: description });
          this.metatag.updateTag({ property: 'og:title', content: pageTitle });
          this.metatag.updateTag({ property: 'og:description', content: description });
          this.metatag.updateTag({ property: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png` });


          console.log("esta es la data " + id);

        })
      );
    }

  })

  //  pokemonResourse = rxResource({
  //     params: () => ({ query: this.page() }),
  //     stream: ({ params }) => {
  //       console.log(params);
  //       if (!params.query) return of([]);
  //       return this.pokemonService.loadPage(params.query).pipe(
  //         tap(() => {
  //           this.title.setTitle(`Pokemon SSR - Page ${this.page()}`)
  //         })
  //       );
  //     })


  resourse = effect(() => {
    console.log(this.pokemonId());
  })


}
