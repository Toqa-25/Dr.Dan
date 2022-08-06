let bar  = document.querySelector(".bar-btn");

bar.onclick = function (){
    if (this.classList.contains("collapsed")){
        this.innerHTML = ``
        this.innerHTML = ` <i class=" fa-solid fa-bars bar-icon"></i>`
        document.querySelector("hr").style.display = "block"

    }else{
        this.innerHTML = ``
        this.innerHTML = `<i class="fa-solid fa-xmark bar-icon"></i>`
        document.getElementsByTagName("hr").style.display = "none"
    }
}

let slider = document.querySelector(".slider"),
 imgsArray = ["https://danneundorf.com/wp-content/uploads/2022/03/IMG_601345-2.jpg",
              "https://danneundorf.com/wp-content/uploads/2022/03/IMG_6015.jpg" , 
              "https://danneundorf.com/wp-content/uploads/2022/03/Booking-banner3.jpg" ,
              "https://danneundorf.com/wp-content/uploads/2022/03/imgl623568-2.jpg" ],
              index = 0;
//   function random(){
//     let randomNumber = Math.floor(Math.random() * imgsArray.length) ;
//     // console.log(randomNumber)
//     console.log(imgsArray[1].next())
//      slider.style.backgroundImage=`url("${imgsArray[randomNumber]}")`;
//       }
    //   setInterval( random, 10000) 
    //   random()
// slider

function dynamicSlider(){
    if (index >= 0 && index < imgsArray.length ){
        index +=1
    }else{
        index= 0;
    }
    slider.style.backgroundImage=`url("${imgsArray[index]}")`
    console.log(index)
}
  setInterval( dynamicSlider, 10000)