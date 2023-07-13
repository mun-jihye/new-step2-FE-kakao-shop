import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useDispatch, useSelector } from "react-redux"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { Suspense, useEffect, useRef, useState } from "react"
import { getProducts } from "../../store/slices/productSlice"
import Loader from "../atoms/Loader"


const MainProductTemplate = () => {
  const [page,setPage] = useState(0)
  const bottomObserver = useRef(null)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const loading = useSelector((state) => state.product.loading)
  // const error = useSelector((state) => state.product.error)
  const isEnd = useSelector((state) => state.product.isEnd)
  const queryClient = new QueryClient();

  // const { data: products, isLoading: loading } = useQuery(['products', page], () =>
  //   dispatch(getProducts(page))
  // );


  const io = new IntersectionObserver((entries, observer) =>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting && !isEnd){
        // 임계점 퍼센트만큼 보이면 해당 코드 실행 
        setPage((page) => page + 1)
      }
    })
  },{
      threshold: 1,
    }
  )

  useEffect(()=>{
    io.observe(bottomObserver.current)
  },[]) // 최초 렌더링때 1번만 선언 


  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page])

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader/>}>
            <ProductGrid products={products} loading={loading}/>
          <div ref={bottomObserver}></div>
        </Suspense>
      </QueryClientProvider>
    </Container>
  )
}

export default MainProductTemplate