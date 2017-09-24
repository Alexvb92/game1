import React from "react";




var generatetiles = function(tiles) {

    var tiles = [];

    for (let j=0; j<12; j++){
        for (let i=0; i<12; i++) {
            var tile = ({num: j + '-' + i,
                        state: "J"});
            tiles.push(tile)
         }
    }
    return tiles
}


class Field extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disp: 'O'
        };
        this.generatetiles = generatetiles.bind(this);
        this.renderer1 = this.render.bind(this)
    }

    componentWillMount(){
        console.log(this)
    }

        componentDidMount(){
    // console.log(this.generatetiles()[0])
    }

    render(){
        {console.log(this)}
        // let tiles;
        return(
           <div className="renderfield">
                {this.generatetiles().map(function renderer1(tile, ref, other)
                     {
                        //console.log(other[ref].state)
                        return (
                            <div className={tile.num + " col-xs-1"} key={tile.num} value='O'>
                                {other[ref].state}{console.log(this)}
                            </div>
                            );
                    },this)
                }
            </div>
        )
    console.log(this)
    }
}

{console.log(this)}
{console.log(this.props)}


// handleKeyPress = (event) => {
//   if(event.key == 'Enter'){
//     console.log('enter press here! ')
//   }
// }

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

// const Field = (props) =>
//   // Setting the initial state of the Counter component
//   <div className="container"> {Genfield} </div>




export default Field;
