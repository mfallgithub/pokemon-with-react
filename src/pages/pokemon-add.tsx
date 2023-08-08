import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

type Params = { id: string };

const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div>
            <div className="row">
                <h2 className="header center">Ajouter{pokemon.name}</h2>
                <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
            </div>
        </div>
    );
}

export default PokemonAdd;