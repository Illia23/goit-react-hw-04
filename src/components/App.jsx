import SearchForm from "./SearchBar/SearchBar";
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import getPhoto from "./api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage"; 
import { useState, useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); 

 useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    const fetchPhotos = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPhoto(query, page);
        console.log('data:', data);

        setImages(prevImages => page === 1 ? data : [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [page, query]);

  const handleSearch = (topic) => {
    setQuery(topic);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  const openModal = (url) => {
    setUrl(url);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setUrl('');
    setIsModalVisible(false);
  };

  return (
    <>
      {error && <ErrorMessage />} 
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery data={images} openModal={openModal} />}
      <SearchForm onSearch={handleSearch} />
      {images.length > 0 && !isLoading && (<LoadMoreBtn click={handleLoadMore} />)}
      {isModalVisible && <ImageModal closeModal={closeModal} url={url} />}
    </>
  );
};

export default App;
