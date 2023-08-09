import Banner from '../components/banner'
import Card from '../components/card'
import Data from '../datas/accomodations.json'

function Home() {
  return <>
    <Banner />
    <section className="cards">
      {Data.map(card => (
          <Card key={card.id} card={card} />
      ))}
    </section>
  </>
}

export default Home