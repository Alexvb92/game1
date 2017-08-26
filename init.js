function Field(x,y) {
    this.x = x;
    this.y = y;
    this.wep = false;
}


//placing the character at the center of the field
var chara = new Field(0,0)


chara.getwep = function() {
    this.wep = true;
    console.log(this)
}


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


//getting the thing and win loss/conditions
    if (chara.x == bads.x && chara.y == bads.y &&  chara.wep == false) {
        console.log('lose')
    }
    else if (chara.x == bads.x && chara.y == bads.y &&  chara.wep == true) {
        console.log('win')
    }
    else if (chara.x == goods.x && chara.y == goods.y) {
        console.log('got the thing')
        chara.getwep();
    }


}

//Loop to create my grid
$(document).ready(function() {
    //this creates rows
    for (j=0; j<12; j++){
        var app = $(".app");
        var gridrow = $("<div></div>");
        app.append(gridrow);
        gridrow.addClass( "row" + [j] + " row" );
        //this appends tiles inside of the rows
        for (i=0; i<12; i++) {
            console.log('this is running');
            var tile = $("<div></div>").text("O");
            tile.addClass( "tile" + [j] + [i] + " col-xs-1" );
            gridrow.append(tile);
        }
    }
});


//setting the position of things in the field
var bads = new Field(((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)), ((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)))

console.log(bads)

var goods = new Field(((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)), ((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random()*11+1)))

console.log(goods)

