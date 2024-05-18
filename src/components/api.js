import axios from "axios";


axios.defaults.baseURL = 'https://api.unsplash.com';


const getPhoto = async (topic, currentPage) => {
    try {
        const response = await axios.get('/search/photos', {
            params: {
                query: topic,
                per_page: 20,
                page:currentPage,
                client_id: '--KxUur6G3ARv-OAwOjncMwBQeLUajMFLvYYD66HuA8',
                
            },
        });
        console.log(topic);
        return response.data.results;
        
        
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}

export default getPhoto;