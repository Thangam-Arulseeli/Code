function getImage(q,category,order){
    fetch(`https://pixabay.com/api/?key=36007746-b36ae27c3528436e0e7b2219a&q=${q}&image_type=photo&category=${category}&min_width=300&min_height=400&order=${order}`,{method:"GET"  //api link from pixaby
    }).then(res => res.json())
    .then(image=>{
        const img = image.hits[0].largeImageURL //target the key hits from the json response object 
        const bg = document.getElementById('showimg');
        bg.style.backgroundImage=`url(${img})`;
        console.log(image);
    
    })
}