import {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';

const TOTAL_SLIDES = 2; 

const StyledContainer = styled.div`
  overflow:hidden;
  position:relative;
`

const StyledSliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  position: relative;
  align-items: center;
`
// 버튼 스타일
const StyledButton = styled.button`
  all: unset;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 41%;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: lightgray;
  }
`
const StyledPrevButton = styled(StyledButton)`
  left: 10%;
`

const StyledNextButton = styled(StyledButton)`
  right: 10%;
`
const ButtonText = styled.span`
  transform: translateX(${(props) => (props.right ? '2px' : '-2px')});
`

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null); 

  const NextSlide = () => {
    if(currentSlide >= TOTAL_SLIDES){
      // 더이상 넘어갈 슬라이드가 없음
      setCurrentSlide(0) //처음 사진으로 넘어감 
    } else{
      setCurrentSlide(currentSlide + 1)
    }
  }

  const PrevSlide = () =>{
    if (currentSlide ===0){
      setCurrentSlide(2) // 마지막 사진으로 넘어간다.
    }else{
      setCurrentSlide(currentSlide -1)
    }
  }

   useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <StyledContainer>
      <StyledSliderContainer ref={slideRef} >
      <img src="/carouselItem1.jpeg" alt='carousel'/>
      <img src="/carouselItem2.jpeg" alt='carousel'/>
      <img src="/carouselItem3.jpeg" alt='carousel'/>
      </StyledSliderContainer>
      <StyledPrevButton onClick={PrevSlide}>
        <ButtonText>{'<'}</ButtonText>
      </StyledPrevButton>
      <StyledNextButton onClick={NextSlide}>
        <ButtonText right>{'>'}</ButtonText>
      </StyledNextButton>
      
    </StyledContainer>
  )
}

export default Carousel