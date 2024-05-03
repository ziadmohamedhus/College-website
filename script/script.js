let imgs= Array.from( document.querySelectorAll(".advertisements .item img"))
let bgContainer =document.querySelector(".bgContainer")

let image =document.querySelector(".image")
let imgSource =document.querySelector(".boxContainer .image")
let next =document.querySelector("#next")
let prev =document.querySelector("#prev")
let clse =document.querySelector("#close")

let after = document.querySelector(".aft1")
let sidebar = document.querySelector(".sidebar")
let after_2 = document.querySelector(".aft2")

console.log(after);



console.log(imgs);

for(let i =0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click" , function(e){
        let imgSrc=e.target.src
        console.log(imgSrc);
        imgNum = imgs.indexOf(e.target)
        console.log(imgNum);
        bgContainer.style.display="flex"
        imgSource.style.backgroundImage=`url(${imgSrc})`

    })
}

function nxt(){
   imgNum++
   if(imgNum == imgs.length)
   {
       imgNum=0
   }
   imageSrc=imgs[imgNum].src
   imgSource.style.backgroundImage=`url(${imageSrc})`
}
next.addEventListener("click" , nxt)

function prv(){
    imgNum--
    if(imgNum <0){
        imgNum = imgs.length - 1
    }
    imageSrc=imgs[imgNum].src
    imgSource.style.backgroundImage=`url(${imageSrc})`

}
prev.addEventListener("click" , prv)

function clos(){
    bgContainer.style.display="none"
}
clse.addEventListener("click" , clos)


document.addEventListener("keydown" , function(e){
    console.log(e);
    if(e.key =="ArrowRight")
    {
        nxt()
    }
    if(e.key =="ArrowLeft")
    {
        prv()
    }
    if(e.key =="Escape")
    {
        bgContainer.style.display="none"
        
    }
})


after.addEventListener("click" , function(){
    console.log("Said");
    sidebar.style.display="block"
})

after_2.addEventListener("click" , function(){
    console.log("Said");
    sidebar.style.display="none"
})


sidebar.addEventListener("click" , function(e){
    e.stopPropagation();
})




