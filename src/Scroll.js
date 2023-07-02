let canScroll = true;

function initscroll()
{
    document.addEventListener("scroll", updateScroll);
}

function updateScroll()
{
    if(canScroll)
    {
        const sections = Array.from(document.querySelectorAll("section.anchor")).map(element => element.getBoundingClientRect());
        let scrollY = window.scrollY;
        let navs = document.querySelectorAll("nav a");

        for(let i=0; i<sections.length; i++)
        {
            if(sections[i].bottom - 150 > 0)
            {
                select(navs[i], false);
                break;
            }
        }
    }
}