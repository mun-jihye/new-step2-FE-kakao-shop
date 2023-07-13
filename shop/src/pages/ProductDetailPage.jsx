import { useParams } from "react-router-dom"
import Loader from "../components/atoms/Loader"
import { getProductById } from "../services/product"
import { useQuery } from "react-query"

const ProductDetailPage = () => {
  const {id}= useParams() //string
  const {
    data:detail, 
    error,
    isLoading
  } = useQuery(`product/${id}`, ()=> getProductById(id))

  return (
      <div>
        {isLoading && <Loader/>}
        {error && <div>{error.message}</div>}
        {detail && <div>{detail.productName}</div>}
      </div>
  )
}

export default ProductDetailPage