



   let ab=`With the "low-left" of the market it had abandoned years earlier booming with Turbo XTs, and being ignored on the high end for UNIX workstations from the likes of Sun Microsystems and SGI, Apple's fortunes of the 1980s quickly reversed. The Christmas season of 1989 drove this point home, with the first decrease in sales in years, and an accompanying 20 percent drop in Apple's stock price for the quarter.In January 1990, Gassée resigned and his authority over product development was divided among several successors.[8] Many Apple engineers had long been pressing for lower-cost options in order to build market share and increase demand across the entire price spectrum. With Gassée out, a rush started to quickly introduce a series of low-cost machines. Three market points were identified, a very low-cost machine aimed at costing $1,000, a low-cost machine with color graphics, and a more upscale color machine for small business use. In time, these would develop as the Classic, Macintosh LC, and Macintosh IIsi.`;
   
let txt1=  ` After spending $40 million marketing the Classic to first-time buyers,[15] Apple had difficulty meeting the high demand.[16] Apple doubled its manufacturing space in 1990 by expanding its Singapore and Cork, Ireland factories, where the Classic was assembled.[16] Air freight, rather than sea shipping, was used to speed delivery.[16] The shortage caused concern among dealers, who blamed Apple's poor business planning.[15]
        
Macintosh Classics and LCs had been given to Scholastic Software 12 weeks before they were officially announced,[17] and Scholastic planned to release 16 new Macintosh products in 1991.[17] Peter Kelman, Scholastic's publisher, predicted that the Macintosh would become "the school machine of the nineties."[17] The Classic was sold to schools for $800.[11] This, and the availability of educational software, led to the Classic's popularity in the education sector.[18]`;




let read_more_Develop = document.querySelector("#read_more_Develop");
let develop=document.querySelector(".develop");

read_more_Develop.addEventListener("click",function(){
    let p= document.createElement("p");
    develop.appendChild(p);
    
    p.innerText=  ab;
    read_more_Develop.style.display="none";
    let butt= document.createElement("button");
    butt.className="butt"
    butt.innerText="read less";
    develop.appendChild(butt);
    butt.addEventListener("click",function(){
        p.remove();
        butt.remove();
        read_more_Develop.style.display="inline";

}
)
}
)

let read_more_Develop2 = document.querySelector("#read_more_Develop2");
let develop2=document.querySelector(".develop2");

read_more_Develop2.addEventListener("click",function(){
    let p= document.createElement("p");
    develop2.appendChild(p);
    
    p.innerText=  txt1;
    read_more_Develop2.style.display="none";
    let butt= document.createElement("button");
    butt.className="butt"
    butt.innerText="read less";
    develop2.appendChild(butt);
    butt.addEventListener("click",function(){
        p.remove();
        butt.remove();
        read_more_Develop2.style.display="inline";

}
)

})
