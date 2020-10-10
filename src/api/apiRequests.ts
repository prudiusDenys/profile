import axios from "axios";
import {ProfileDataType} from "../components/Profile/Profile";

const instance = axios.create({
	headers: {'Content-Type': 'application/json', 'x-token-access': 'random'}
})

const END_POINT = process.env.REACT_APP_API_KEY

export const requestsAPI = {
	createRequestAPI(values: ProfileDataType){
		return instance.post(`http://jsonplaceholder.typicode.com/${END_POINT}`, values)
	}
}