import React from 'react'
import Meta from 'components/meta'
import Container from 'components/container'
import PokeHero from 'components/pokehero'
import App from 'lib/app'
import eyecatch from 'images/about.jpg'

function Poke () {
  return (
    <Container>
      <Meta
        pageTitle='ポケモン'
        pageDesc='About development activities'
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <PokeHero title='ポケモン図鑑' />
      <App />
    </Container>
  )
}

export default Poke
