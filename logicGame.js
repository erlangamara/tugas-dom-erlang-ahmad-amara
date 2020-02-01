var answer = [];
var click = []

//foto lampu
var foto1 = document.getElementById('foto1');
var foto2 = document.getElementById('foto2');
var foto3 = document.getElementById('foto3');
var foto4 = document.getElementById('foto4');
var foto5 = document.getElementById('foto5');
var foto6 = document.getElementById('foto6');
var foto7 = document.getElementById('foto7');

var start = document.getElementById('tombol-start');
var mati = "assets/off.png"
var hasil = document.getElementById('result');
var ulang = document.getElementById('retry');

function randomize(){
    var ran = Math.floor(Math.random() * 7)
    return ran;
}

function off(){
    foto1.src = mati
    foto2.src = mati
    foto3.src = mati
    foto4.src = mati
    foto5.src = mati
    foto6.src = mati
    foto7.src = mati
}

function cek(){
    var fix = [];
    for(var x = 0; x < answer.length; x++){
        var check = true;
        for(var y = 0; y < fix.length; y++){
            if(answer[x] === fix[y]){
                check = false;
            }
        }

        if(check === true){
            fix.push(answer[x]);
        }
    }
    
    var flag1 = false;
    for(var i = 0; i < click.length; i++){
        var flag2 = false;
        for(var j = 0; j < fix.length; j++){  
            if(fix[j] === click[i]){
                flag2 = true;
            }
        }


        if(flag2 === true){
            flag1 = true;
        } else{
            flag1 = false;
            break;
        }
    }

    if(flag1 === true && click.length === fix.length){
        var menang = document.getElementById('box');
        menang.src = "assets/win.png"  /* menang */
        start.src = "assets/reset.png"
    } else{
        var kalah = document.getElementById('box');
        kalah.src = "assets/lost.png" /* kalah */
        start.src = "assets/reset.png"
    }
}

function pattern(ans){
    
    for(var i = 0; i < ans; i++){
        var num = randomize();
        if(num === 0){
            answer.push(num);
            foto1.src = "assets/on.png" ;/*nyala*/
        }else if(num === 1){
            answer.push(num);
            foto2.src = "assets/on.png" ;/*nyala*/
        }else if(num === 2){
            answer.push(num);
            foto3.src = "assets/on.png" ;/*nyala*/
        }else if(num === 3){
            answer.push(num);
            foto4.src = "assets/on.png" ;/*nyala*/
        }else if(num === 4){
            answer.push(num);
            foto5.src = "assets/on.png" ;/*nyala*/
        }else if(num === 5){
            answer.push(num);
            foto6.src = "assets/on.png" ;/*nyala*/
        }else if(num === 6){
            answer.push(num);
            foto7.src = "assets/on.png" ;/*nyala*/
        }
        setTimeout(function(){off()}, 650);
    }

    foto1.onclick = () => {
        click.push(0)
    }
        
    foto2.onclick = () => {
        click.push(1)
    }

    foto3.onclick = () => {
        click.push(2)
    }

    foto4.onclick = () => {
        click.push(3)
    }
        
    foto5.onclick = () => {
        click.push(4)
    }

    foto6.onclick = () => {
        click.push(5)
    }

    foto7.onclick = () => {
        click.push(6)
    }


    hasil.onclick = () => {
        cek();
    }
}


//mulai
start.onclick = () => {
    pattern(7);
    start.style.visibility = 'hidden';

}

ulang.onclick = () => {
    location.reload();
}



