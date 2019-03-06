import React, { Component } from "react";

class SquareGrid extends Component {
  render() {
    return (<div className="wrapper">
    
    <ul className="sq clearfix">
        <li className="sq-item sq-item-large">
            <a className="sq-item-anchor" href="">
                <img className="sq-item-anchor-cover" src={require("./images/crepe.png")} alt="" />
                <span className="sq-item-anchor-title">Crepe</span>
            </a>
        </li>
        <li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item sq-item-long sq-item-float-right">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item ">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item sq-item-wide">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li><li className="sq-item">
            <a className="sq-item-anchor" href="">
                Crepe
            </a>
        </li>
    </ul>

    
    
    </div>)
    ;
  }
}

export default SquareGrid;
