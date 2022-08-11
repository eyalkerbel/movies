export const fetchSearchResults = async query => {
   return fetch(`/api?title=${query}`).then(data => data.json()).then(data => {
        return data.data
    });
}