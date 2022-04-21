import React, {useContext} from 'react'
import "./Cell.css"
import { userContext } from '../../App'

const Cell = ({pos, attempt}) => {
    const {grid} = useContext(userContext);
    const cell = grid[attempt][pos];
    return (
        <div className='cell'>{cell}</div>
    )
}

export default Cell