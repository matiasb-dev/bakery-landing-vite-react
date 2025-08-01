import ProductCard from "../components/ProductCard"
import masasFinas from '../assets/masasfinas1.jpeg';
import masasSecas from '../assets/masassecas.jpeg';
import tortaChocolate from '../assets/tortachocolate1.jpg'
import facturas from '../assets/facturas.jpg'
import tartaFrutilla from '../assets/tartafrutilla1.jpg'


const products = [
  { name: 'Torta de Chocolate', image: tortaChocolate },
  { name: 'Tarta de Frutilla', image: tartaFrutilla },
  { name: 'Facturas Variadas', image: facturas },
  { name: 'Masas Secas', image: masasSecas },
  { name: 'Masas Finas', image: masasFinas },
];

function Home() {
  return (
    <main className="home">
      <section className="intro">
        <h2>Tradición y Sabor Artesanal</h2>
        <p>Hacemos productos dulces con amor y calidad para cada ocasión.</p>
      </section>

      <section className="products">
        <h2>Nuestros Productos</h2>
        <div className="cards-container">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home