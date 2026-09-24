import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { stringify } from 'querystring';
import { map, Observable, tap } from 'rxjs';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { PokeAPIResponse } from '../interfaces/pokemon-api.response';
import { PokemonMapper } from '../mappers/pokemon.mapper';
import { Pokemon } from '../interfaces/pokemon.response.interface';

@Service()
export class PokemonService {

    private http = inject(HttpClient);
    

    public loadPage(page: number): Observable<SimplePokemon[]>{
        if(page !== 0){
            --page;
        }

        page = Math.max(0,page);

        return this.http.get<PokeAPIResponse>(
            `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
        ).pipe(
            map(resp => PokemonMapper.PokemonArray(resp.results)),
            tap(console.log)
        )
        
    }

    public LoadPokemon(id:string): Observable<Pokemon>{


        return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    }



}
