export const fetchGiff = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=tqDsVi5XWRbX1n56P2gN4jSuofLh5tUE`;
    const response = await fetch(url);
    const { data } = await response.json();
    const giffs = data.map(img => {
        return (
            {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url,
            }
        )
    });
   return giffs
}
