import SearchForm from "./SearchForm/SearchForm";
import ImagesList from "./ImagesList/ImagesList";
import getPhoto from "../api";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('');

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
  }

  return (
    <>
      {isLoading && <Loader />}
      {images.length > 0 && <ImagesList data={images} openModal={openModal} />}
      <SearchForm onSearch={handleSearch} />
      {images.length >0 && !isLoading && (<Button click={handleLoadMore} />)}
      {url && <Modal closeModal={()=> setUrl('')} url={url} />}
      </>
  )
}

export default App;
