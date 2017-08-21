function Field(x,y) {
    this.x = x;
    this.y = y;
}

var chara = new Field(0,0)

document.onkeyup = function(e){

    //hitting 12 and stopping

        console.log(e)
        switch(e.keyCode) {
        case 37:
            if (chara.x == -12) {
            console.log('cant go there')
            } else
            chara.x -= 1;
            //left
            break;
        case 38:
            if (chara.y == 12) {
            console.log('cant go there')
            } else
            chara.y += 1;
            // up
            break;
        case 39:
             if (chara.x == 12) {
            console.log('cant go there')
            } else
            chara.x += 1;
            //right
            break;
        case 40:
            if (chara.y == -12) {
            console.log('cant go there')
            } else
            chara.y -= 1;
            //down
            break;
        default:
            // code block
        }
    }


var bads = new Field
