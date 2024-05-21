import SearchForm from "./SearchBar/SearchBar";
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import getPhoto from "./api";
import Loader from "./Loader/Loader";
import ErrorMessag from "./ErrorMessage/ErrorMessag";
import { useState, useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('');
  const [modalVisibl, setModalVisibl] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
  return
    } 

    async function fetchPhoto() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPhoto(query, page);
      console.log('data:', data);
    setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
    }
    
    fetchPhoto();
  }, [page, query])
  
  
  const handleSearch = async (topic) => {
    setQuery(topic);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = url => {
    setUrl(url);
    setModalVisibl(true);
  }

  const closeModal = () => {
    setUrl('');
    setModalVisibl(false);
  }

  return (
    <>
      {error && <ErrorMessag />}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery data={images} openModal={openModal} />}
      <SearchForm onSearch={handleSearch} />
      {images.length >0 && !isLoading && (<LoadMoreBtn click={handleLoadMore} />)}
      {modalVisibl && <ImageModal closeModal={closeModal} url={url} />}
      </>
  )
}

export default App;
