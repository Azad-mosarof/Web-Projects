let newsapi=`https://newsdata.io/api/1/news?apikey=pub_4096789ba8ed7f05cca1d088957c414fac62&country=in`;
let main=document.querySelector(".nitm");
let catagories=["Business","Technology","Sports","Science","Health"];
const item=document.getElementsByClassName("item");

for(let i=0; i<catagories.length;i++){
    let div=document.createElement("div");
    div.innerText=catagories[i];
    div.className="catagories";

    div.addEventListener("click",function(){
        fetchCatagoryNews(catagories[i]);
    });

    // div.addEventListener("click",fetchCatagoryNews(catagories[i]))

    // if(i == 0){
    //     fetchCatagoryNews(catagories[i]);
    // };
    main.querySelector(".itm").appendChild(div);
}


async function fetchCatagoryNews(catagory){
    try{
        const res =await fetch(newsapi+"&category="+catagory.toLowerCase());
        const data=await res.json()
        console.log(data);
        let news=data.results;
        console.log(news);

        for(let i=0;i<news.length;i++){
            let div=document.createElement("div");
            div.className="item";
            
            div.innerHTML=
            `
            <div class="details">
            <div>
            <h2>${news[i].title}</h2>
            <p>${news[i].description}</p>
            </div>
            </div>
            `
            ;

            main.querySelector(".new_item").appendChild(div);
        }


    }
    catch{

    }
}
