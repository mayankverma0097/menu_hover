menu=document.getElementById("menu");
// console.log(menu);
list=document.getElementsByClassName("list");
// console.log(list);
menu.addEventListener('mouseover',function(){
    list[0].style.display="block";
})
menu.addEventListener('mouseout',function(){
    list[0].style.display="none";
})
list[0].addEventListener('mouseover',function(){
    list[0].style.display="block";
})
list[0].addEventListener('mouseout',function(){
    list[0].style.display="none ";
})