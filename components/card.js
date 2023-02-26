import React from 'react'
import 'styles/card.module.css'

const Card = ({ pokemon }) => {
  return (
    <div className='card'>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <div>
          <ul>
            <li>
              タイプ:
              {pokemon.types.map(type => {
                return (
                  <div key={type.type.name}>
                    <span className='typeName'>{type.type.name}</span>
                  </div>
                )
              })}
            </li>
            <li className='title'>能力: {pokemon.abilities[0].ability.name}</li>
            <li className='title'>重さ: {pokemon.weight}</li>
            <li className='title'>高さ: {pokemon.height}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
