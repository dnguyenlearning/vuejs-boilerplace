import axios from "axios";
import {store} from "./store"
const instance = axios.create({
    baseURL: 'your api here'
});

const setUpInterceptors = () => {
    instance.interceptors.response.use(
        (response) =>{
            return response
        },
        (error)=>{
            if (error.response.status === 406) {
                store.dispatch('users/logout');
                return error.response.status;
            }
            return Promise.reject(error)
        }
    );
};

export {setUpInterceptors};
export default instance;
