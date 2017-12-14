let request = superagent

let TOTAL_PAGES = 500
// console.log(request)

let button = document.getElementById("go")
let result_el = document.getElementById("result")

button.onclick = function(){
  result_el.innerHTML = "LOADING"
  let page_num = Math.floor(Math.random()*TOTAL_PAGES)
  let url = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page_num}`

  request.get(url).end(on_end) 
}



function on_end(err, res){
  if (err) {
    console.log("err!", err)
    return
  }

  let index = Math.floor( res.body.data.length*Math.random() )
  let show = res.body.data[index]
  result_el.innerHTML = create_show_markup(show)


}


function create_show_markup(show){
  let html = `
  <style> 
  h1{
   color: #ffffff;
   text-align:center;
  }
  </style>
  <h1>${show.attributes.canonicalTitle}</h1>
  <p>${show.attributes.synopsis}</p>
  `
  return html
}
