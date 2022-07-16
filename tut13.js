console.log(" Execrise ");

let str = "Paython";
let links = document.links;
console.log(links);
let href;

Array.from(links).forEach(function(element){
href = element.href;
if(href.includes(str)){
    console.log(href);

}
}
)