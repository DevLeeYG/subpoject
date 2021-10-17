import { useState, useRef } from 'react';
import corsair from '../Img/corsair.png';
import logi from '../Img/logi.png';
import razer from '../Img/razer.png';
import roccat from '../Img/roccat.png';
import Slider from 'react-slick';
import '../App.css';
import back from '../Img/back.png';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

console.log(MdArrowForwardIos);
let dummyImage = [
  {
    id: 1,
    src: corsair,
  },
  {
    id: 2,
    src: logi,
  },
  {
    id: 3,
    src: razer,
  },
  {
    id: 4,
    src: roccat,
  },
];

const Brand = () => {
  const [img, setIag] = useState(dummyImage);
  const slider = useRef(null);

  const maps = img.map((el) => {
    return (
      <a className="brand-link">
        <img className="brand-image-name" key={el.id} src={el.src} alt="" />
      </a>
    );
  });

  const set = {
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slide">
      <i className="slide-prev" onClick={() => slider?.current?.slickPrev()}>
        <MdArrowBackIos />
      </i>
      <i className="slide-next" onClick={() => slider?.current?.slickPrev()}>
        <MdArrowForwardIos />
      </i>
      <Slider arrows={false} ref={slider} {...set}>
        {maps}
      </Slider>
    </div>
  );
};

export default Brand;

{
  /* <i className="before">
        <MdArrowBackIos size="100"></MdArrowBackIos>
      </i>
       <i className="next">
       <MdArrowForwardIos size="100"></MdArrowForwardIos>
     </i> */
}
