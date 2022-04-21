import React, {useState} from 'react'
import { defaultGrid } from '../../DefaultGrid'
import Cell from '../Cell/Cell';
import "./Grid.css"

const Grid = () => {
    return (
        <div className="grid">
            {" "}
            <div className="row">
                <Cell pos={0} attempt={0}/>
                <Cell pos={1} attempt={0}/>
                <Cell pos={2} attempt={0}/>
                <Cell pos={3} attempt={0}/>
                <Cell pos={4} attempt={0}/>
            </div>
            <div className="row">
                <Cell pos={0} attempt={1}/>
                <Cell pos={1} attempt={1}/>
                <Cell pos={2} attempt={1}/>
                <Cell pos={3} attempt={1}/>
                <Cell pos={4} attempt={1}/>
            </div>
            <div className="row">
                <Cell pos={0} attempt={2}/>
                <Cell pos={1} attempt={2}/>
                <Cell pos={2} attempt={2}/>
                <Cell pos={3} attempt={2}/>
                <Cell pos={4} attempt={2}/> 
            </div>
            <div className="row">
                <Cell pos={0} attempt={3}/>
                <Cell pos={1} attempt={3}/>
                <Cell pos={2} attempt={3}/>
                <Cell pos={3} attempt={3}/>
                <Cell pos={4} attempt={3}/>
            </div>
            <div className="row">
                <Cell pos={0} attempt={4}/>
                <Cell pos={1} attempt={4}/>
                <Cell pos={2} attempt={4}/>
                <Cell pos={3} attempt={4}/>
                <Cell pos={4} attempt={4}/>
            </div>
            <div className="row">
                <Cell pos={0} attempt={5}/>
                <Cell pos={1} attempt={5}/>
                <Cell pos={2} attempt={5}/>
                <Cell pos={3} attempt={5}/>
                <Cell pos={4} attempt={5}/>
            </div>
        </div>
    )
}

export default Grid