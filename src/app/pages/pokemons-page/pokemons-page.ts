import { ApplicationRef, Component, effect, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeletor } from './iu/pokemon-list-skeletor/pokemon-list-skeletor';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [PokemonList, PokemonListSkeletor, RouterLink],
  selector: 'app-pokemons-page',
  styleUrl: './pokemons-page.css',
  templateUrl: './pokemons-page.html',
})
export default class PokemonsPage {

  // public page = signal(1);
  public title = inject(Title);
  public isLoading = signal(false);
  private pokemonService = inject(PokemonService);

  public page = input(1,{//Con esto tenemos acceso a los query Params, Route params, Data/Resolvers del route
    alias:'p',
    transform: (value) => numberAttribute(value,1)
  });
  // public page = input(1,{transform: (value) => numberAttribute(value,1)});


  pokemonResourse = rxResource({
    params: () => ({ query: this.page() }),
    stream: ({ params }) => {
      console.log(params);
      if (!params.query) return of([]);
      return this.pokemonService.loadPage(params.query).pipe(
        tap(() => {
          this.title.setTitle(`Pokemon SSR - Page ${this.page()}`)
        })
      );
    }

  });


  
  // private  appRef =inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe((isStable) =>{
  //   console.log(isStable)
  // })


  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isLoading.set(false);

  //   }, 1500)
  // }

}
