import Card from "../Card/Card"
import "./Cards.css"

const Cards = ({productos}) => {
  return (
    <div className="cardsGrid">
        {productos.map(prod => <Card key={prod.id} {...prod}/> )}
    </div>
  )
}

export default Cards