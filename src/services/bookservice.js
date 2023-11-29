import axios from "axios";

export default {
    getAllBook(){
        return axios.get('http://localhost:8000/api/books')
            .then(resp => {
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

    }
}