import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

function Home () {
  return (
    <Container>
      <Meta />
      <Hero
        title='CUBE'
        subtitle='output'
        imageOn
      />
    </Container>
  )
}

export default Home
