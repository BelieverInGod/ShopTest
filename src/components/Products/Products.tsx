import './Products.css';

import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import {connect} from "react-redux";
import {setMoreProducts, setProducts} from "../../redux/ProductsReducer";
import {useEffect, useState} from "react";
import {shopServiceApi} from "../../service/shopServiceApi";
import {Grid} from '@mui/material';
import {useParams} from "react-router-dom";

function Products({products, setProducts, setMoreProducts }: any) {
    const [page, setPage] = useState(12)
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const res = await shopServiceApi.getProduct(id, page).then((response: any) => setProducts(response));
        })()
    }, [id, page])

    return (
        <div className="Products">
            <Grid container rowSpacing={2} columnSpacing={2} xs={12}>
                {products.data !== undefined && products.data.map((item: any) => <Grid key={item.id} item xs={3}>
                        <img src={item.images} alt={item.id} className='photo'/>
                    </Grid>
                )}

            </Grid>
            <button onClick={() => setPage(page + 12)}></button>
        </div>
    );
}

const productsData = (state: any) => ({
    products: state.products.products,
    categoriesId: state.sortBar.categories
})

export default connect(productsData, {setProducts, setMoreProducts})(Products);
