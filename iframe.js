// const youtubeId = ``;
// const apiKey = ``;

// let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeId}&maxResults=10&order=date&key=${apiKey}`;

fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSjSmjY9cEI_ib-NrBElVXw&maxResults=10&order=date&key=AIzaSyAleOviVf7UxzBqbViyZ3Zw40ySQVlu6ys"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let videos = data.items;
    //Using for of loop we can fetch all contents
    for (vid of videos) {
      //Getting all contents from Youtube api
      const id = vid.id.videoId;
      const image = vid.snippet.thumbnails.high.url;
      //Getting div from api.html
      const iframeDiv = document.getElementById("fetchYt");
      //creating iframe div1 and adding contents
      const iframeDiv1 = document.createElement("div");
      iframeDiv1.classList.add("col-md-6 white mt-3");
      const iframeDiv2 = document.createElement("div");
      iframeDiv1.classList.add("ratio ratio-16x9 yt-bd");
      //Createing a iframes using javascript
      iframeYt = document.createElement("iframe");
      iframeYt.src = `https://www.youtube.com/embed/${id}?rel=0`;
      iframeDiv.appendChild(iframeDiv1);
      iframeDiv.appendChild(iframeDiv2);
      iframeDiv.appendChild(iframeYt);
      alert(iframeDiv1);
    }
  });
