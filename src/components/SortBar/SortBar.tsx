import React, {useEffect} from 'react';

import './SortBar.css';
import {shopServiceApi} from "../../service/shopServiceApi";
import {setCategory} from "../../redux/SortBarReducer";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";

function SortBar({category, setCategory}:any) {
    useEffect(() => {
        (async ()=>{
            const res = await shopServiceApi.getCategories().then((response:any) => setCategory(response));
            // console.log(res.categories.data.map((item:any) => item.name))
            })()
    }, [])

    console.log(category)
    return (
        <div className="SortBar">
            <p>Переглянути все</p>
            {category.data !== undefined && category.data.map((item:any) => <a key={item.id} href='#'>{item.name}</a>)}
        </div>
    );
}

const categoriesData = (state:any) => ({
  category: state.sortBar.categories
})

export default connect(categoriesData, {setCategory}) (SortBar);

