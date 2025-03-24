// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.querySelector('form')
const API_KEY = "4bm7Pjd8T0rKTNuWtPwhiCjf9J2FSdfV"
const pictureContainer = document.getElementById("picture-container")
const reset = document.getElementById("reset")

form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form)

    const searchTerm = formData.get("gifSearch")

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=5`)
    .then(response => {
        const gifs = Array.from(response.data.data || []);  // Converts to an array if it's not already
        pictureContainer.innerHTML = ""
        console.log(gifs)
        gifs.forEach(gif => {
            
            const gifImage = document.createElement('img')
            gifImage.src = gif.images.fixed_height.url
            gif.width = 600;
            gif.height = 600;
            pictureContainer.appendChild(gifImage)

        })
    })
    .catch(error => console.error("Error fetching data:", error));

   
    
})

reset.addEventListener('click', function(e){
    pictureContainer.innerHTML = ""
})
