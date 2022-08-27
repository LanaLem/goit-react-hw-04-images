const KEY = '25337579-f9c9c008ee647e32b41f56e51'

export const fetchGallery = (search, page) => {
    return fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.hits
        })
}