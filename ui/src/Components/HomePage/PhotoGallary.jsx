import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Footer from '../Footer/Footer';
import axios from 'axios'
export default function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/admin/getPhotos', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('aJwt')
          },
          body: JSON.stringify({})
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const responseData = await response.json();
        // Add 'liked' property to each image object
        const imagesWithLikes = responseData.map(image => ({ ...image, liked: false, likeCount: 0 }));
        setImages(imagesWithLikes);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleLikeClick = async (index) => {
    const updatedImages = [...images];
    updatedImages[index].liked = !updatedImages[index].liked;
    updatedImages[index].likeCount += updatedImages[index].liked ? 1 : -1;
    setImages(updatedImages);

    try {
      // Make API request to update like count in the database
      await axios.post('http://localhost:3000/updateLikeCount', {
        imageId: updatedImages[index]._id, // Pass the image ID to identify which image to update
        likeCount: updatedImages[index].likeCount // Pass the updated like count
      });
    } catch (error) {
      console.error("Error updating like count: ", error);
    }

  };
  const galleryStyles = {
    backgroundImage: 'url("/images/vender/coding.gif")',
    height: '150px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    // top:'4rem',
    zIndex: '-1'
  };
  return (
    <div className='container-fluid mx-0 px-0 '>
      <div className='container-fluid mx-0 px-0 '>
        <div style={galleryStyles}></div>
        <div className=" text-center text-white z-3 py-5 mb-5">
          <h1 className="fw-bolder py-2 z-3  text-white d-flex justify-content-center align-items-center ">
            &nbsp; <i className="fa fa-picture-o text-white" aria-hidden="true"></i> &nbsp;GALLERY
          </h1>
        </div>
        {isLoading ? (
          <div className='text-center'>Loading...</div>
        ) : (
          <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 m-3 py-5">
              {images.map((image, index) => (
                <div className="col" key={index}>
                  <div className="card rounded-0" onClick={() => handleImageClick(image)}>
                    <img src={image.url} className="card-img-top img-fluid h-100  rounded-0 img-thumbnail" style={{ cursor: 'pointer' }} alt={image.name} />
                    <div className="card-body my-0 p-1 bg-white">
                      <h5 className="card-title my-0 py-0">{image.name}</h5>
                      <p className="card-text my-0 py-0">{image.category}</p>
                    </div>
                  </div>
                  <button className={`like-button btn text-danger ${image.liked ? 'liked' : ' '}`} onClick={() => handleLikeClick(index)}>
                    <i className="fa fa-heart"></i> <p className="small py-0 my-0">{image.likeCount}</p>
                  </button>
                </div>
              ))}
            </div>
            <Modal show={selectedImage !== null} onHide={handleCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>{selectedImage && selectedImage.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedImage && (
                  <img src={selectedImage.url} className="img-fluid card bg-primary m-auto" alt={selectedImage.name} />
                )}
              </Modal.Body>
            </Modal>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
