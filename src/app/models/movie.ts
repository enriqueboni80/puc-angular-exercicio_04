export interface IMovie {
    id: number
    title: string
    backdrop_path: string
    original_title: string
    overview: string
    vote_count: number
    popularity: number
    
}

export interface IMovieResults {
    results: Array<IMovie>
}