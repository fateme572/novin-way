import { MovieRepository } from "@/api/repositories/movieRepository.js";
import movieCard from "@/components/movieCard/index.vue";
import datePicker from "@/components/datePicker/index.vue";

export default {
    name: "HomePage",
    components: {
        movieCard,
        datePicker
    },
    data() {
        return {
            movies: [],
            page: 1,
            totalPages: 500,
            perPage: 20,
            rangeReleaseDate: [],
            apiIsLoaded: false,
        };
    },
    mounted() {
        this.getMovies();
    },
    computed: {
        sortedRangeReleaseDate() {
            if (this.rangeReleaseDate.length > 1) {
                return this.rangeReleaseDate.sort((a, b) => new Date(a) - new Date(b));
            }
        },
        filterParams() {
            let params = {}

            if (this.rangeReleaseDate.length == 1) {
                params = {
                    'primary_release_date.gte': this.rangeReleaseDate[0]
                }
            } else {
                params = {
                    'primary_release_date.gte': this.sortedRangeReleaseDate[0],
                    'primary_release_date.lte': this.sortedRangeReleaseDate[1]
                }
            }

            return params
        }
    },
    methods: {
        getMovies(params) {
            // every time navigate to next page should set false
            this.apiIsLoaded = false;

            // show loading
            const loader = this.$loading.show();

            // send req to server for get list of movies
            MovieRepository.list(params || {}).then((res) => {
                const { data } = res
                this.movies = data.results;
                this.page = data.page;
                console.log(res);
                this.apiIsLoaded = true;
                loader.hide();
            });
        },
        nextPage() {

            // send request to get movies with special params
            if (this.page < this.totalPages) {
                if (this.rangeReleaseDate.length == 0) {
                    this.getMovies({
                        page: ++this.page
                    })
                } else {
                    this.getMovies({
                        page: ++this.page,
                        ...this.filterParams
                    })
                }
            }
        },
        previosPage() {
            if (this.page > 1) {
                if (this.rangeReleaseDate.length == 0) {

                    this.getMovies({
                        page: --this.page
                    })
                } else {
                    this.getMovies({
                        page: --this.page,
                        ...this.filterParams
                    })
                }

            }
        },
        filterByReleaseDate() {
            if (this.rangeReleaseDate.length > 0) {
                this.getMovies(this.filterParams)
            }
        }
    }
};