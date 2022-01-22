import { instance } from '../axiosClient';

class Credit {

    list(movie_id) {
        return instance.get(`/movie/${movie_id}/credits`);
    }
}

export const CreditRepository = new Credit();