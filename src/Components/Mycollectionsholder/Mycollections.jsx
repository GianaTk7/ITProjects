import React, { useState } from 'react';
import './Mycollections.css';

function Mycollections() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ imageSrc: '', description: '', rating: '' });

  const handleImageClick = (imageSrc, description, rating) => {
    setModalContent({ imageSrc, description, rating });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="Mycollectionsss">
        <div className='colle'>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('myimage1.jpg', 'Nasa Shirt with Matched Pant', '⭐⭐⭐⭐☆')}>
              <img src='myimage1.jpg' alt='me' className='img1' />
              <div className='images-discription'>
                <h2>Nasa Shirt with Matched Pant</h2>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('image2.jpg', 'Baseball Shirt and Baggy Cargo Pants', '⭐⭐⭐☆☆')}>
              <img src='image2.jpg' alt='me' className='img1' />
              <div className='images-discription'>
                <h3>Baseball Shirt and Baggy Cargo Pants</h3>
                <p>⭐⭐⭐☆☆</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('img3.jpg', 'Bargo Pants with Shirt', '⭐⭐⭐⭐⭐')}>
              <img src='img3.jpg' alt='me' className='img1' />
              <div className='images-discription'>
                <h3>Bargo Pants with Shirt</h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('image4.jpg', 'Star Dingo Pants', '⭐⭐⭐⭐☆')}>
              <img src='image4.jpg' alt='me' className='img1' />
              <div className='images-discription'>
                <h3>Star Dingo Pants</h3>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          </div>
        </div>

        <div className='colle'>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('images7.jpg', 'White String Crop Top', '⭐⭐⭐☆☆')}>
              <img src='images7.jpg' alt='me' className='img2' />
              <div className='images-discription'>
                <h3>White String Crop Top</h3>
                <p>⭐⭐⭐☆☆</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('image6.jpg', 'Ladona Green Pants', '⭐⭐⭐⭐⭐')}>
              <img src='image6.jpg' alt='me' className='img2' />
              <div className='images-discription'>
                <h3>Ladona Green Pants</h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('inmycollection.jpg', 'Butterfly Handbag', '⭐⭐⭐☆☆')}>
              <img src='inmycollection.jpg' alt='me' className='img2' />
              <div className='images-discription'>
                <h3>orange heat and fas goat</h3>
                <p>⭐⭐⭐☆☆</p>
              </div>
            </div>
          </div>
          <div className='my-fits'>
            <div className='my-images' onClick={() => handleImageClick('inmycollections2', 'Ladies Outing Dress', '⭐⭐⭐⭐☆')}>
              <img src='inmycollections2.jpg' alt='me' className='img2' />
              <div className='images-discription'>
                <h3>baggy cargo with a baggy vest</h3>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalContent.imageSrc} alt="Modal" className="modal-image" />
            <h2>{modalContent.description}</h2>
            <p>{modalContent.rating}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Mycollections;
