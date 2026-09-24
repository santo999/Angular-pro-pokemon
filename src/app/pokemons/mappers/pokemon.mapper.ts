
import { PokeAPIResponse, Result } from "../interfaces/pokemon-api.response";
import { SimplePokemon } from "../interfaces/simple-pokemon.interface";

export class PokemonMapper {

    static PokemonItem(item:Result):SimplePokemon {

        return {
            
            name:item.name ?? '',
            id:item.url.split('/').at(-2) ?? ''
        }
    }

    static PokemonArray(items:Result[]):SimplePokemon[] {
        return items.map(this.PokemonItem);
    }

}