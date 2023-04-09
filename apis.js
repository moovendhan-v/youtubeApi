let channelId = "UCSjSmjY9cEI_ib-NrBElVXw";
let apiKey ="AIzaSyA0-i7FDK6yaDE-InmN0SSy4DIIuorMBJU";
let maxResult = 10;
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResult}&order=date&key=${apiKey}`)
.then(result => result.json()).then(data =>{
    items = data.items;
    console.log(items);
    for(yt of items){
        const id = yt.id.videoId;
        const title = yt.snippet.title;
        console.log(title);
        console.log(id);
        //Creating div 
        const div1 = document.createElement("div");
        div1.classList.add('col-md-6', 'white', 'mt-3');
        //Creating div 2
        const div2 = document.createElement("div");
        div2.classList.add('ratio', 'ratio-16x9', 'yt-bd');
        //Creating iframes
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${id}?rel=0`;
        iframe.title = "Youtube vidos";
        iframe.setAttribute('allowfullscreen', '');
        //appending all divs
        div2.appendChild(iframe)
        div1.appendChild(div2)
        const iframediv = document.querySelector("#fetchYt");
        iframediv.appendChild(div1);
        //creating title div
        const titleDiv = document.createElement('div');
        titleDiv.classList.add("text-primary", "poppins", "mt-2", "text-truncate", "text-truncate-hover");
        titleDiv.innerText = `${title}`;
        div1.appendChild(titleDiv);
    }
});