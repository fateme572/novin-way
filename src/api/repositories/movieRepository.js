import { instance } from '../axiosClient';

class Movie {

    list(params) {
        return instance.get('/discover/movie', {
            params: params
        });
    }
    show(id) {
        return instance.get(`/movie/${id}`)
    }
}

export const MovieRepository = new Movie();