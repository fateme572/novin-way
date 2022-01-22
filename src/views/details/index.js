import { MovieRepository } from "@/api/repositories/movieRepository.js";
import { CreditRepository } from "@/api/repositories/creditsRepository";

export default {
    name: 'MovieDetails',
    data() {
        return {
            movie: {},
            apiIsLoaded: false,
            credits: [],
        }
    },
    mounted() {
        const loader = this.$loading.show();
        Promise.all([this.getDetails(this.$route.params.id), this.getCredits(this.$route.params.id)])
            .then(() => {
                this.apiIsLoaded = true;
                loader.hide();
            })
    },
    computed: {
        movieDetails() {
            if (this.apiIsLoaded) {
                const movie = this.movie
                return {
                    'Budget': movie.budget,
                    'Revenue': movie.revenue,
                    'Release Date': movie.release_date,
                    'Runtime': movie.runtime,
                    'Score': movie.vote_average,
                    'Genres': movie.genres.map(val => val.name).join(),
                    'Homepage Link': movie.homepage,
                }
            }
        }
    },
    methods: {
        getDetails(id) {
            return MovieRepository.show(id)
                .then(res => {
                    this.movie = res.data
                })
        },
        getCredits(id) {
            return CreditRepository.list(id)
                .then(res => {
                    this.credits = res.data
                })
        }
    }
}