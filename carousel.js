const list=[
    {
        ref:0,
        name:"messi",
        job:"footballer",
        info:"Born in Rosario, Argentina, in 1987, Lionel Messi is widely regarded as one of the greatest football players of all time, and his illustrious career proves why. Known for his exceptional dribbling, vision, passing, and goal-scoring ability Lionel Messi, widely regarded as one of the greatest footballers in history, has an extraordinary career filled with remarkable achievements. At the club level, he spent the majority of his career with FC Barcelona, where he won 10 La Liga titles, 7 Copa del Rey titles, and 4 UEFA Champions League trophies, among other accolades.",
        img:"./OIP.jpg"
    },
    {
        ref:1,
        name:"Cristiano",
        job:"Footballer",
        info:"Cristiano Ronaldo is a Portuguese soccer player.He is considered one of the best players of his time and is one of the most well-known sports stars off the field.",
        img:"./R.jpg"
    },
    {
        ref:2,
        name:"Virat",
        job:"Cricketer",
        info:"Virat Kohli is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. A former captain in all formats of the game, Kohli retired from the T20I format following India's win at the 2024",
        img:"./Virat_Kohli.jpg"
    },
    {
        ref:3,
        name:"Sachin",
        job:"Cricket",
        info:"Sachin Tendulkar was the most complete batter of his time, the most prolific run-maker of all time, and arguably the biggest cricket icon the game has ever known.",
        img:"./sachin.jpg"
    },
    {
        ref:4,
        name:"Max Verstappen",
        job:"F1 rookie",
        info:"Max Verstappen is a Belgian and Dutch racing driver competing in Formula One1. He is the youngest race-winner in F1 history and a three-time world champion2. Verstappen races under the Dutch flag in Formula One for Red Bull Racing1. He is currently the most dominant Formula 1 driver on the grid and the 2023 Formula 1 World Champion3. Verstappen is known for his aggressive driving style and has often been compared to the likes of Ayrton Senna4",
        img:"./Max.jpg"
    }


]
const img=document.getElementById("person-img");
const author=document.getElementById("name");
const job=document.getElementById("job");
const info=document.getElementById("info");

const next_btn=document.querySelector(".next-btn");
const prev_btn=document.querySelector(".prev-btn");
const random_btn=document.querySelector(".random-btn");

window.addEventListener("DOMContentLoaded",function(){
    const item=list[0];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.info;
});

function id(val){
    const item=list[val];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.info;


}
let val=0;
next_btn.addEventListener("click",function(){
    val++;
    if(val>=list.length){
        val=0;
    }
    id(val);


})
prev_btn.addEventListener("click",function(){
    val--;
    if(val<0){
        val=list.length-1;
    }
    id(val);


})

random_btn.addEventListener("click",function(){
    console.log("Random");
    id(Math.floor(Math.random()*list.length))

})
