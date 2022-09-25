import React, {useEffect} from 'react';

import './SortBar.css';
import {shopServiceApi} from "../../service/shopServiceApi";
import {setCategory} from "../../redux/SortBarReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

function SortBar({category, setCategory}: any) {

    useEffect(() => {
        (async () => {
            const res = await shopServiceApi.getCategories().then((response: any) => setCategory(response));
        })()
    }, [])

    return (
        <div className="SortBar">
            <p>Переглянути все</p>
            {category.data !== undefined && category.data.map((item: any) => <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''} key={item.id}
                to={`/сategory/${item.id}/Post`}>{item.name}</NavLink>
            )}
        </div>
    );
}

const categoriesData = (state: any) => ({
    category: state.sortBar.categories
})

export default connect(categoriesData, {setCategory})(SortBar);

