//Here Add your youtube channel id 
const youtubeId = ``;
//Here  Add your api key which you where generated from console.cloud.google.com
const apiKey = ``;

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeId}&maxResults=10&order=date&key=${apiKey}`;

fetch(url)
.then((result)=>{
    return result.json();
}).then((data)=>{
    console.log(data);
    let videos = data.items;
    //Using for of loop we can fetch all contents
    for(vid of videos){

        //Getting all contents from Youtube api
        const id = vid.id.videoId;
        const image = vid.snippet.thumbnails.high.url;

        //Getting div from api.html
        const divImg = document.getElementById("YtImage");

        //Creating a image element and intializing attributes
        const imageDiv = document.createElement('div');
        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.classList.add("col-md-6");

        //Inserting a image elements in child from parent div
        imageDiv.append(imageElement);
        divImg.appendChild(imageElement);

        //Generating outputs in cansole log
        console.log(`https://www.youtube.com/watch?v=${id}`);
        // document.write(`<img src="${image}" alt="">`);

    }
})

