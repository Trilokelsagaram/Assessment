import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import './QuickLookModal.css';

const QuickLookModal = (props) => { 

 const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(props.images)
  }, [props])

  return (
    <div>
        <div className="modal-backdrop"></div>
        <div className="modal">
            <button className="closeBtn" onClick={() => props.hideModal()}>X</button>
            { images.length ? (
            <Carousel>
            {images.map((img, index) => (
                <div key={index} >
                    <img alt="no image" src={img.href} />
                </div>
                ))}
            </Carousel>) : (<div className="imgNotAvailable">No images available</div>)}
        </div>
    </div>
  );
}

export default QuickLookModal;
