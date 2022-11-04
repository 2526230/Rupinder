


let read_more_Develop3 = document.querySelector("#read_more_Develop3");
let develop3=document.querySelector(".develop3");
let txt2=` In the February 1991 edition of Electronic Learning, Robert McCarthy wrote: "Teachers, educational administrators, and software developers are enthusiastic about the new, lower-cost Apple Macintosh computers". Steve Taffe, manager of instructional strategy at MECC, a developer and publisher of educational software, explained his excitement about the Classic: "[it] is terrific – both because it's a Mac and because of that low price. Everyone can now afford a Macintosh." Scholastic, an educational software developer, was also confident of Apple's ability to compete with MS-DOS machines, stating: "They are just as cost-effective and as powerful as MS-DOS computers, but the Apples will have a superior comfort level." Sue Talley, Apple's manager of strategic planning in education, said of the Classic: "we see it going into applications where you need a fair number of powerful stations, but where color is not a big issue." Talley mentioned that it was most suited for writing labs and other basic productivity uses. Many schools decided not to buy the Macintosh Classic because of the lack of a color monitor, an option that the higher-priced Macintosh LC had.[29] The popular Apple IIe Card also increased the LC's appeal to schools. Although the Classic was more popular at first, by May 1992 the LC (560,000 sold) was outselling the Classic (1.2 million sold).[30]`;


read_more_Develop3.addEventListener("click",function(){
    let p= document.createElement("p");
    develop3.appendChild(p);
    
    p.innerText=  txt2;


    read_more_Develop3.style.display="none";
    let butt= document.createElement("button");
    butt.className="butt"
    butt.innerText="read less";
    develop3.appendChild(butt);
    butt.addEventListener("click",function(){
        p.remove();
        butt.remove();
        read_more_Develop3.style.display="inline";


        

    })
}
)