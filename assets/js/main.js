// const sumNums = (a,b) =>{
//     console.log (a+b);
// }

// sumNums(3,1)

// let ad = prompt("Adinizi daxil edin");
// let soyAd = prompt("Soyadinizi daxil edin");

// // console.log(ad)
// // console.log(soyAd)

// const fullName = (ad,soyAd) => {
//     console.log(`${ad},${soyAd}`);
// }

// fullName(ad,soyAd);
// let months = prompt("Ayi daxil edin")

// switch (months){
//     case "1":
//     case"2":
//     console.log("Yaz ayi");
//     break;
//     case"4,5,6":
//     console.log("Yay ayi");
//     break;
//     default:
//         console.log("bas bayra")
// }

// let a = prompt("Ilk reqem daxil edin")
// let b = prompt("ikinci reqem daxil edin")
// let c = prompt("ucuncu reqem daxil edin")

// minimum = Math.min(a, b, c);

// console.log(minimum)


// let test = prompt("reqem daxil edin")


// minimum = Math.min(test);

// console.log(minimum)

// for(let i = 0 ; i < 100; i++){
//     if(i % 2 == 0)
//     console.log(i);
// }

let otaqinuzunluqu = Number(prompt("Otaqin uzunluqunu daxil edin"));
let otaqinenliyi = Number(prompt("Otaqin enliyini daxil edin"));
let otaqinhundurluyu = Number(prompt("Otaqin hundurluyunu daxil edin"));

if(!isNaN(otaqinenliyi) && !isNaN(otaqinhundurluyu) && !isNaN(otaqinuzunluqu)){
    let perimetr = (otaqinenliyi * 2 + otaqinuzunluqu * 2);
    let sahe = (perimetr * otaqinhundurluyu);
    console.log(sahe + "m2 Sahe");
    let boya = parseInt(sahe / 15)+"L Boya";
    console.log(boya);
}
else{
    console.log("Reqem daxil edin");
}

