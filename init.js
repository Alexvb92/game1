function Field(x,y) {
    this.x = x;
    this.y = y;
}

var chara = new Field(0,0)

document.onkeyup = function(e){

    console.log(e)

    switch(e.keyCode) {
        case 37:
            if (chara.x == -12) {
            console.log('cant go there')
            } else
            chara.x -= 1;
            console.log(chara)
            //left
            break;
        case 38:
            if (chara.y == 12) {
            console.log('cant go there')
            } else
            chara.y += 1;
            console.log(chara)
            // up
            break;
        case 39:
             if (chara.x == 12) {
            console.log('cant go there')
            } else
            chara.x += 1;
            console.log(chara)
            //right
            break;
        case 40:
            if (chara.y == -12) {
            console.log('cant go there')
            } else
            chara.y -= 1;
            console.log(chara)
            //down
            break;
        default:
            // code block
    }

    if (chara.x == bads.x && chara.y == bads.y) {
        console.log('lose')
    }


}

var bads = new Field(((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)), ((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)))

console.log(bads)

