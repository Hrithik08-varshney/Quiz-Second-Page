       var images=[
        `<img src="https://img.icons8.com/dotty/160/000000/finn.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/mongrol.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/jake.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/ninja-turtle.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/doctor-fate-helmet.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/futurama-fry.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/super-mario.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/black-panther-mask.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/hawkeye.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/hulk.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/baby-yoda--v2.png"/>`,
        `<img src="https://img.icons8.com/dotty/160/000000/scream.png"/>`
       ];
       window.onload=function(){
        var dp=document.querySelector(".dp");
        var name=document.querySelector(".name");
        var keys = Object.keys(localStorage);
       keys.sort();
      /*  console.log(keys); */
       var last_value= JSON.parse(localStorage.getItem(keys[keys.length-1]));
        name.innerHTML=`${last_value.yname}`;
        console.log(last_value);
        var index=Math.floor(Math.random() * 12);
        last_value.img=`${images[index]}`;
        localStorage.setItem(last_value.serial,JSON.stringify(last_value));
        dp.innerHTML=`${images[index]}`;
       }
       
/* import { vale } from "../Front Page/app.js"; */
