import PropTypes from 'prop-types';
import Slick from 'react-slick';
import {useState} from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
position:fixed;
z-index:5000;
top:0;
left:0;
right:0;
bottom:0;
`;
const Header = styled.header`
height:44px;
background:white;
position:relative;
padding:0;
text-align:center;
& h1{
    margin:0;
    font-size:17px;
    color:#333;
    line-height:4px;
}
& button {
    position:absolute;
    right:0;
    top:0;
    poadding:15px;
    line-height:14px;
    cursor:pointer;

}
`;

const SlickWrapper = styled.div`
height:calc(100%-44px);
background:#090909;

`;



const ImagesZoom =({images,onClose})=>{
    const [currentSlide,setCurrentSlide] =useState(0);

    return(
        <Overlay>
<Header>
    <h1> </h1>
    <button onClick={onClose}>X</button>
</Header>
<SlickWrapper>
    <div>
        <Slick
        initialSlide={0}
        afterChange={(slide) => setCurrentSlide(slide)}
        infinite
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        >{images.map((v)=>(
            <div key ={v.src}>
            <img src ={v.src} alt={v.src}/>
            </div>
        ))}
            </Slick>
        
    </div>
</SlickWrapper>
        </Overlay>
  
    );
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}
export default ImagesZoom;