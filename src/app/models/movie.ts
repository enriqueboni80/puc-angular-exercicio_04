export interface IMovie {
    title: string
    backdrop_path: string
    original_title: string
    overview: string
}

export interface IMovieResults {
    results: Array<IMovie>
}