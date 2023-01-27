
import  axios  from "axios";


const journalApi = axios.create({
    baseURL: 'https://vue-demos-484c6-default-rtdb.firebaseio.com'
})


export default journalApi