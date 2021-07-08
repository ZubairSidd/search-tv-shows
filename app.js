const searchForm = document.querySelector("#search")
const searchResult = document.querySelector("#searchResults")
const searchShow = document.querySelector("#searchShow")


const showTVShow = (shows) => {
    for (let i = 0; i < 10; i++) {
        let img = document.createElement("img")
        let showTitle = document.createElement("h4")
        let showHolder = document.createElement("div")
        showHolder.classList.add("showHolder")
        if(shows[i].show.image){
            img.src = shows[i].show.image.medium;
            showTitle.innerText = shows[i].show.name
            showHolder.append(img,showTitle)
            searchResult.append(showHolder);
        }
        
    }
}
const getTVShow = async (title) => {
    try {
        const showTitle = {params: {q: title}}
        const res = await axios.get("http://api.tvmaze.com/search/shows", showTitle)
        // console.log(res.data)
        return await res.data
    } catch {
        console.log("ERROR!!!")
    }
}

const searchTVShow = async (e) => {
    searchResult.innerHTML = ''
    e.preventDefault();
    const allShows = await getTVShow(searchShow.value);
    showTVShow(allShows)
    searchShow.value = ''

}
searchForm.addEventListener('submit', searchTVShow)