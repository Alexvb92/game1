function Field(x,y) {
    this.x = x;
    this.y = y;
    this.wep = false;
}


//placing the character at the center of the field
var chara = new Field(6,6)

chara.getwep = function() {
    this.wep = true;
    console.log(this)
}


//Loop to create my grid
$(document).ready(function() {

    var letrow;
    //this creates rows
    for (let j=0; j<12; j++){
        var app = $(".app");
        var gridrow = $("<div></div>");
        app.append(gridrow);
        gridrow.addClass( "row" + [j] + " row" );

        //this appends tiles inside of the rows
        for (let i=0; i<12; i++) {
            var tile = $("<div></div>").text("O");
            tile.addClass( "tile" + j + '-' + i + " col-xs-1" );
            gridrow.append(tile);
        }
    }


// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");

    document.onkeyup = function(e){
        //overwrite the characters previous place
        $(".tile" +chara.x + "-" +chara.y).text('O')
        console.log(e)

        switch(e.keyCode) {
            case 37:
                if (chara.y == 0) {
                console.log('cant go there')
                } else
                chara.y -= 1;
                console.log(chara)
                //left
                break;
            case 38:
                if (chara.x == 0) {
                console.log('cant go there')
                } else
                chara.x -= 1;
                console.log(chara)
                // up
                break;
            case 39:
                 if (chara.y == 11) {
                console.log('cant go there')
                } else
                chara.y += 1;
                console.log(chara)
                //right
                break;
            case 40:
                if (chara.x == 11) {
                console.log('cant go there')
                } else
                chara.x += 1;
                console.log(chara)
                //down
                break;
            default:
                // code block



        }

        //Visually move the character
        $(".tile" +chara.x + "-" +chara.y).text('this')


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



    //setting the position of things in the field
    var bads = new Field(Math.floor(Math.random()*12), Math.floor(Math.random()*12))

    console.log(bads)

    var goods = new Field(Math.floor(Math.random()*12), Math.floor(Math.random()*12))

    console.log(goods)
    //visually generating special tile locations
    $(".tile" +bads.x + "-" +bads.y).text('baddie')
    $(".tile" +goods.x + "-" +goods.y).text('weapon')
    $(".tile" +chara.x + "-" +chara.y).text('this')

});


