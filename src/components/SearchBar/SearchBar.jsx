import search from './SearchBar.module.css'
const SearchForm = ({ onSearch }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        
        if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
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
                <button className={search.fromBtn} type="submit">Search</button>
            </form>
        </header>
        
    )
}

export default SearchForm;