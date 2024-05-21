import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import search from './SearchBar.module.css'
const SearchForm = ({ onSearch }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        
        if(form.elements.topic.value.trim() === "") {
			toast.error("Please enter search term!")
			return;
        }
        
        console.log("topic:", topic)
        onSearch(topic);
        form.reset()

    }

    return (
        <header className={search.header}>
            <form className={search.form}  onSubmit={handleSubmit}>
                <input className={search.input} type="text" name="topic" placeholder="Search photos..." />
                <button className={search.formBtn} type="submit">Search</button>
                <ToastContainer />
            </form>
        </header>
        
    )
}

export default SearchForm;
