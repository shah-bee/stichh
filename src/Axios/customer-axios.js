import axios from 'axios'

const instance = axios.create(
    {
        baseURL :'https://mystichapp-a1be9.firebaseio.com/'
    }
)

export default instance