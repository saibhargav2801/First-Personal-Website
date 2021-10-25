$(".menubar").click(function()
{
    $(".menubar i").toggleClass("far fa-window-close");
    $("header").toggleClass("addclass");
})

var loader = $("#preloader");

$(window).on("load",function()
{
    loader.css("display","none");
});

var sections = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('.navbar ul li');

$(window).on('scroll',function()
{
    var current = ' ';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;//gets the top distance of each sections//
        const sectionHeight = section.clientHeight;//gets the height of each section//
        if(scrollY+200 >= sectionTop){
            current = section.getAttribute('id');
        }
    })
    navlinks.forEach(li =>{
        li.classList.remove('navactive')
        if(li.classList.contains(current)){li.classList.add('navactive')}
    })
    
})


