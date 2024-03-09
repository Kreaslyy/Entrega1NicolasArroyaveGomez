import React, { useState } from "react";
import { AddCategories } from "./components/AñadirCatg";
import { GiffPageInit } from './components/PagePhoto';
import { GiffListItems } from './components/GifListarItems';



const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories);
    
    return (  
        <div className='body-content--main'>
            <AddCategories setCategories={setCategories} />
            {
                (categories.length === 0) ?
                    <GiffPageInit
                        message='Busca tu Gif favorito'
                    /> :
                    <GiffListItems
                        categories={categories}
                    />     
            }
        </div>
    );
}
 
export default GifExpertApp;