let allPost =async (category)=>{
  
    let allPostData =await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category}`)
    let dataJs = await allPostData.json()
let red = document.getElementById('details')
// let big = document.getElementById('card-details')
    let data = dataJs.posts

   
    
  

    data.forEach(items => {
      
        // console.log(items)

let div = document.createElement('div')
div.classList = 'flex gap-5 justify-center  bg-[#F3F3F5] h-56 p-8 rounded-2xl space-y-1'
div.innerHTML = `

 <div>
    <img class ="w-20" src=${items.image}>
    </div>
    
<div class="space-y-2">
    
    <div class="flex gap-3 items-center ">
        <p class="text-sm font-bold	">#${items.category}</p>
        <p class="text-sm font-bold	">Author: ${items.author.name}</p>
    </div>
<h3 class="text-base font-bold">10 Kids Unaware of Their Halloween Costume</h3>
<p >t’s one thing to subject yourself to ha Halloween  costume mishap because, <br>
    hey that’s your prerogative</p> 
    <hr class="border-dotted mt-4">
    <div class="flex justify-between pt-3 items-center  ">
       
        <div class="flex gap-4 mt-3" >
<img src="images/Vector.png" alt="">
<span> ${items.
    comment_count
    }</span>
<img src="images/Vector (1).png" alt="">
<span>${items.
    view_count}</span>
<img src="images/Vector (2).png" alt="">
<span>${items.
    
posted_time}</span>

        </div>



        <div >
            <button onclick ="Send('${items.title.slice(0,30)}','${items.view_count}')"><img src="images/Group.png" alt=""></button>
        </div>
    </div>
</div>



`


red.appendChild(div)

    }
   

);



}


let sum = 1
let Send = (details, view)=>{
    let update  = document.getElementById('updateCount')

update.innerText = sum++

    let showCardDetails = document.getElementById('cart')
    let div = document.createElement('div')
    div.classList.add('card-info')
    div.innerHTML = `
     
    <p class='font-semibold'>${details}</p>
    <div class='flex gap-3'>
    <img src="images/Vector (1).png" alt="">
    <h3>${view}</h3>
    </div>
    `

    showCardDetails.appendChild(div)
}

// LATEST POST

let latestPost =async () =>{
    let latest =await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    let data = await latest.json()
    let arItems = data
    // console.log(arItems)
    let card = document.getElementById('latestCard')
   

    arItems.forEach(items=>{
   
    //  console.log(items)


   
        // console.log(items)
        let div= document.createElement('div')
        div.classList = 'card bg-base-100 w-[350px] shadow-xl '
        div.classList.add("addToCard")
        div.innerHTML = `
        
        
         <figure class="px-10 pt-10">
      <img
        src="${items.
            cover_image}"
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <!-- img description -->
    <div class="card-body  ">
        <div id="images-descrption" class="space-y-4 ">
     <div class="flex gap-2">
        <img src="images/Frame (1).png" alt="">
        <p>#${items.author.posted_date?items.author.posted_date: "Not found"}</p>
     </div>
      <h1 class="text-base font-bold">${items.
        title}</h1>
      <p>${items.
 description.slice(0,80)} </p>
      <div class="flex gap-5">
        <!-- elite images -->
        <div>
            <img class ='w-12 rounded-2xl' src=${items.
                profile_image
                }>
        </div>
        <div>
           <h3 class="text-sm font-bold">${items.author.name}</h3>
           <p>${items.author.designation?items.author.designation: "not found"}</p>
        </div>
      </div>
    </div>
</div>
   
        
        `
card.appendChild(div)





    })
}


let searchButton = ()=>{
   
    let input = document.getElementById('inputField').value 
    // console.log(input)
   allPost(`?category=${input}`)
    // console.log(content)
    // allPost(input)
}




allPost()
latestPost()
searchButton()

