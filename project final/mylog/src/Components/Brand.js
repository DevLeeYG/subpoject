import { useState } from 'react';
import corsair from '../Img/corsair.png';
import logi from '../Img/logi.png';
import razer from '../Img/razer.png';
import roccat from '../Img/roccat.png';
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

  const maps = img.map((el) => {
    return (
      <a className="brand-link">
        <img className="brand-image-name" key={el.id} src={el.src} alt="" />
      </a>
    );
  });

  return (
    <div className="brand">
      <i className="before">
        <MdArrowBackIos size="100"></MdArrowBackIos>
      </i>
      {maps}
      <i className="next">
        <MdArrowForwardIos size="100"></MdArrowForwardIos>
      </i>
    </div>
  );
};

export default Brand;
