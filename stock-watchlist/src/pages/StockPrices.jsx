import { useParams } from "react-router-dom"
import stock from '../data'
console.log(stock)
const StockPrices =()=>{
  
    const params = useParams()
    const symbol = params.symbol
    console.log(symbol)
    return ( 
    <div>Hi</div>
    )
}
export default StockPrices