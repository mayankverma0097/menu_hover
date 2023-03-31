tog=document.getElementById("tog");
console.log(tog);
tog1=document.getElementsByClassName("tog1");
console.log(tog1);
body=document.getElementsByTagName("body");
tog.addEventListener('mouseover',function(){
 tog1[0].style.background="yellow";
 tog1[0].style.display="flex";
})

tog.addEventListener('mouseout',function(){
    tog1[0].style.background="yellow";
    tog1[0].style.display="none";
   })

   tog1[0].addEventListener('mouseover',function(){
    // tog1[0].style.background="yellow";
    tog1[0].style.display="flex";
   })
   tog1[0].addEventListener('mouseout',function(){
    // tog1[0].style.background="yellow";
    tog1[0].style.display="none";
   })