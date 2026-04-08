import axios from "axios";


const api = axios.create({
    baseURL:"https://jsonfakery.com/movies/paginated"
})

// get
export const getService = ()=>{
    return   api.get('/')
}
// post
export const postService =(newMovie)=>{
    return api.post('/movies',newMovie)
}
