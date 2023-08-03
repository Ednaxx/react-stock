export default function ErrorPage({ error }) {

    switch (error.status) {
        case 400:
            return <h1>Something bad happened with the request.</h1>
        case 500:
            return <h1>Server-side Error</h1>
        default:
            return <h1>Something unexpected happened :(</h1>
    }
}