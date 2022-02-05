fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "3294c0d91dmsh90e432b2d62323bp1e966ajsnec8760fa4be0"
	}
})
.then(response => response.json())
.then( data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
		const year = item.y;
		const movie = `<li>
		<img src="${poster}">
		<h2>${name}</h2>
		<h3>${year}</h3>
		</li>`

		document.querySelector('.movies').innerHTML += movie;
    })
})
.catch(err => {
	console.error(err);
});