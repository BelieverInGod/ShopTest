import './Products.css';
import likeIcon from '../../assets/image/likeIcon.png'
import redLike from '../../assets/image/redLike.png'
import morePostIcon from '../../assets/image/4.png'
import lessPostIcon from '../../assets/image/lessPost.png'

import * as React from 'react';
import {connect} from "react-redux";
import {setLike, setMoreProducts, setProducts, showMore} from "../../redux/ProductsReducer";
import {useEffect, useState} from "react";
import {shopServiceApi} from "../../service/shopServiceApi";
import {Grid} from '@mui/material';
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";



function Products({products, setProducts, showMore, setLike}: any) {
    const [page, setPage] = useState(12)
    const [visiblePost, setVisiblePost] = useState(3)
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const res = await shopServiceApi.getProduct(id, page).then((response: any) => {
                response.data.map((item: any) => {
                    item.like = true
                })
                setProducts(response.data)
            });
        })()
    }, [id])

    const addMoreProducts = (id: string | undefined, page: number) => {
        showMore(id, page).then(() => setPage(page + 12))
    }

    return (
        <div className="Products">
            <div className={'visiblePost'}>
            <NavLink
                    className={({isActive}) => isActive ? 'active' : ''} key={'lessPost'}
                    to={`/сategory/${id}/Post`}>
                      <img className={'lessPostIcon'} src={lessPostIcon} alt={lessPostIcon}
                     onClick={() => setVisiblePost(6)}/>
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'active' : ''} key={'morePost'}
                    to={`/сategory/${id}/Post`}>
                      <img className={'morePostIcon'} src={morePostIcon} alt={morePostIcon}
                     onClick={() => setVisiblePost(3)}/>
                </NavLink>
            </div>
            <Grid container rowSpacing={2} columnSpacing={2} xs={12}>
                {products !== undefined && products.map((item: any) => <Grid key={item.id} item
                                                                                       xs={visiblePost}>
                        <div className={'productContainer'}>
                            <img src={item.images} alt={item.id} className='photo'/>
                            <div className={'priceBox'}>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price} UAH</p>
                                </div>
                                <div>
                                    {
                                        item.like ?
                                            <img src={likeIcon} alt={'likeIcon'} onClick={() => console.log(setLike(item.id, false)) }/> :
                                            <img src={redLike} alt={'redLike'} onClick={() => setLike(item.id, true)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
            <button onClick={() => addMoreProducts(id , page)} className={'btn'}>Load more...</button>
        </div>
    );
}

const productsData = (state: any) => ({
    products: state.products.products,
    like: state.products.like,
    categoriesId: state.sortBar.categories,
})

export default connect(productsData, {setProducts, showMore, setLike})(Products);
