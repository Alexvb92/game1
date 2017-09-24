import React from "react";


    // $(".tile" +chara.x + "-" +chara.y).text('this')



const tiles = [];

    for (let j=0; j<12; j++){
        for (let i=0; i<12; i++) {
            var tile = ('tile:'+ j + '-' + i);
            tiles.push(tile)
         }
    }


handleKeyPress = (event) => {
  if(event.key == 'Enter'){
    console.log('enter press here! ')
  }
}


// const Genfield = tiles.map((tile) => <div className={tile + " col-xs-1"} key={tile} value="O"> O </div> )







// const Genfield =  React.createClass({
//         render: function()(
//             tiles.map(function (tile) {
//                 return(
//                     <div className={tile + " col-xs-1"} key={tile} value="O"> O </div>
//                  );
//             })
//         )
//     }

// console.log(this)

const Genfield = tiles.map((tile) => <div className={tile + " col-xs-1"} key={tile} value="O"> O </div> )


const Field = (props) =>
  // Setting the initial state of the Counter component
  <div className="container"> {Genfield} </div>




export default Field;
