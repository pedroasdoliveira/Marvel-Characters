import Card from "../../components/Card"
import Header from "../../components/Header"
import './style.css'

const Home = () => {
  return (
   <main>
    <Header />

    <section className="list-cards">
        <div className="card-container">
        
            <Card />

        </div>
        <button className="btn-view-more">Ver mais</button>
    </section>
   </main>
  )
}

export default Home