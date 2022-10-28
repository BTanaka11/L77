import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

import ProductStore from "../Provider/Zus_Provider.jsx";

const GalleryDiv = styled.div`
display: flex;
justify-content: center;
`
const Thumbnails = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`
const Timg = styled.img`
width: 45px;
height: 60px;
object-fit: contain;
cursor: pointer;
`

const Button = styled.button`
text-decoration: none;
background: transparent;
border: none;
height: auto;
width: auto;
`

const ButtonN = styled.button`
opacity: .3;
margin: 5px auto;
background: transparent;
border: none;
height: 50px;
width: 100px;
border: solid;
:hover {
  opacity: 1;
  border: 1px solid white;
  box-shadow: 4px 4px 12px #c5c5c5,
              -4px -4px 12px #ffffff;
  border-radius: 20px;
 }
`


const ButtonP = styled.button`
opacity: .3;
margin: 5px auto;
background: transparent;
border: none;
height: 50px;
width: 100px;
border: solid;
:hover {
  opacity: 1;
  border: 1px solid white;
  box-shadow: 4px 4px 12px #c5c5c5,
              -4px -4px 12px #ffffff;
  border-radius: 20px;
 }
`

const Scrollbar = styled.div`
width: 1px;
height: 720px;
background: #ccc;
display: block;
margin: 0 0 0 8px;
`
const Thumb = styled.div`
width: 1px;
position: absolute;
height: 0;
background: #000;
`

const Slides = styled.div`
margin: 0 16px;
display: grid;
grid-auto-flow: row;
gap: 1rem;
width: calc(540px + 1rem);
padding: 0 0.25rem;
height: 800px;
overflow-y: auto;
overscroll-behavior-y: contain;
scroll-snap-type: y mandatory;
scrollbar-width: none;
::-webkit-scrollbar {
display: none;
}
`
const IDiv = styled.div`
display: flex;
justify-content: center;
scroll-snap-align: start;
height: 780px;
`

const C2img = styled.img`
height: 780px;
max-width: 95%;
object-fit: contain;
`

const F2Div = styled.div`
display: flex;
flex-direction: column;
`

const StyledModal = styled.header`
  position: fixed;
  z-index: 100;
  padding: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: rgba(0,0,0,0.8); /* Fallback color */
`

const Gallery2 = () => {

  const cStyle = ProductStore((state) => state.curStyle);
  const [ShowModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(null);

  const show = () => {
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    if (activeSlideRef.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeSlide]);


  if (!cStyle) {
    return null;
  }

  const moveLeft = Math.max(0, activeSlide - 1);
  const moveRight = Math.min(cStyle.photos.length - 1, activeSlide + 1);
  console.log(cStyle);

  return (
    <GalleryDiv>
      <Thumbnails>
      {cStyle.photos.map((img, index) => {
          return(
              <Timg key={index} src={img.url} onClick={() => setActiveSlide(index)}/>
          )
      })}
      </Thumbnails>
      <Scrollbar>
        <Thumb/>
      </Scrollbar>
      <F2Div>
        <ButtonP onClick={() => setActiveSlide(moveLeft)}>PREV</ButtonP>
        <Slides>
          {cStyle.photos.map((img, index) => {
            return(
              <IDiv key={index} ref={index === activeSlide ? activeSlideRef : null} >
                <Button onClick={() => show()}>
                  <C2img key={index} src={img.url}/>
                </Button>
              </IDiv>
            )
          })}
        </Slides>
        <ButtonN onClick={() => setActiveSlide(moveRight)}>NEXT</ButtonN>
      </F2Div>
    </GalleryDiv>
  )
}

export default Gallery2;

// const slideGallery = document.querySelector('.slides');
// const slides = slideGallery.querySelectorAll('div');
// const scrollbarThumb = document.querySelector('.thumb');
// const slideCount = slides.length;
// const slideHeight = 720;
// const marginTop = 16;

// const scrollThumb = () => {
//   const index = Math.floor(slideGallery.scrollTop / slideHeight);
//   scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
// };

// const scrollToElement = el => {
//   const index = parseInt(el.dataset.id, 10);
//   slideGallery.scrollTo(0, index * slideHeight + marginTop);
// };

// document.querySelector('.thumbnails').innerHTML += [...slides]
//   .map(
//     (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
//   )
//   .join('');

// document.querySelectorAll('.thumbnails img').forEach(el => {
//   el.addEventListener('click', () => scrollToElement(el));
// });

// slideGallery.addEventListener('scroll', e => scrollThumb());

// scrollThumb();