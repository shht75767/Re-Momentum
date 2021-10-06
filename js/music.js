const music = document.querySelector(".music");
console.log(music);

const musics = [
    {
        musicImg : "musicImg/0.jpg",
        musicSinger : "아이유 - 라일락",
        musicText : ""
    },
    {
        musicImg : "musicImg/1.jpg",
        musicSinger : "비비 - PADO",
        musicText : ""
    },
    {
        musicImg : "musicImg/2.jpg",
        musicSinger : "Coldplay X BTS - My Universe",
        musicText : ""
    },
    {
        musicImg : "musicImg/3.jpg",
        musicSinger : "ASHISLAND - Play (Prod. TOIL)",
        musicText : ""
    },
    {
        musicImg : "musicImg/4.jpg",
        musicSinger : "백예린 - 산책",
        musicText : ""
    }
];

const todayMusic = musics[Math.floor(Math.random()*musics.length)];
const img = document.createElement("img")
const span = document.createElement("span");
img.src = `${todayMusic.musicImg}`
span.innerText = `${todayMusic.musicSinger}`

music.appendChild(img)
music.appendChild(span)

