let bar;
let items;

const select = (element, bloc) =>
{
    if(bloc)
    {
        canScroll = false;
        setTimeout(()=>{canScroll = true;}, 500);
        items.forEach(item =>
        {
        item.classList.remove("active");
        })
    }
  bar.style.width = `${element.offsetWidth}px`;
  element.classList.add("active");
  bar.style.left = `${element.offsetLeft}px`;
  
  let num = element.classList[0];
  let circles = document.querySelectorAll(".circle");
  circles.forEach(circle =>
    {
        circle.classList.remove("active");
    });
    circles[num-1].classList.add("active");
};

function init()
{
    bar = document.getElementById("navLine");
    items = document.querySelectorAll("nav a");
  items.forEach(item =>
  {
    item.addEventListener("click",e => {select(e.target, true)});
    item.classList.contains("active") && select(item);
  });
}
