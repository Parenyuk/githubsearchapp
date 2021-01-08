import axios from 'axios';
import {GithubResponseDataType} from '../services/types';


const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

export const githubApi = {
    setSearchRepositories(searchValue: string) {
        return instance.get<GithubResponseDataType>(`users/${searchValue}/repos`)
    },
}

