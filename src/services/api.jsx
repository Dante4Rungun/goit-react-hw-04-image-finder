import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/"
const API_KEY = '28520366-db1a44be7c858e83a77c814fc'

export const fetchImagesWithQuery = async (searchQuery,page) => {
    const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits
}

const api = {
  fetchImagesWithQuery   
}
export default api