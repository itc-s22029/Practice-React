import { useEffect, useState } from 'react'
import Card from 'components/card'
import { getPokemon } from 'utils/get'

function App () {
  // pokeAPI
  const initialURL = 'https://pokeapi.co/api/v2/pokemon' // endpoint
  const [loading, setLoading] = useState(true) // 最初にloading出したいのでtrue
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      const res = await getPokemon(initialURL)
      // 詳細データを取得
      loadPokemon(res.results)
      setLoading(false)
    }
    fetchPokemonData()
  }, [])

  const loadPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      // Promise.all(配列)、全部とってくるまで待つ
      data.map((pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord
      })
    )
    setPokemonData(_pokemonData)
  }
  // console.log(pokemonData); //もしコンソールの結果がPromise {<pending>}というものなら、async-awaitつけ忘れ

  return (
    <>
      <div className='App'>
        {loading
          ? (
            <p className='loader'>ロード中。。。</p>
            )
          : (
            <div>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            )}
      </div>
    </>
  )
}

export default App
