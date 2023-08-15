import Banner from '../components/banner'
import img from '../assets/home-banner.jpg'
import Card from '../components/card'
import Data from '../datas/accomodations.json'

function Home() {
  return <>
    < Banner image={img} text="Chez vous, partout et ailleurs" />
    <section className="cards">
      {Data.map(card => (
          <Card key={card.id} card={card} />
      ))}
    </section>
  </>
}

export default Home