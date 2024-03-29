import React from 'react'
import { GiffGrid } from './Grid';

export const GiffListItems = ({categories}) => {
    return (
        <ol>
        {
            categories.map((category) => (
                <GiffGrid
                    key={category}
                    category={category}     
                />
            ))
        } 
    </ol>   
    )
}
