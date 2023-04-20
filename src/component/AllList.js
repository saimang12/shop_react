import React, { useState } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const AllList = ({ shop }) => {
    const [page, setPage] = useState(0);
    const [list, setListNum] = useState(0);
    const itmLimit = 10;
    const pageLimit = 20;
    const shopLength = shop.length;
    const pageNum = Array.from({ length: parseInt(shopLength / itmLimit) + 1 })

    return (
        <div className="AllList">
            <div className="inner">
                <div className="title">
                    <h2>All Product</h2>
                </div>
                <div className="page_num">
                    {
                        page > 1 &&
                        <button onClick={() => { setPage(page - pageLimit) }} className='prev'><BsChevronDoubleLeft /></button>
                    }
                    {
                        pageNum.map((it, idx) => {
                            return (
                                <button onClick={() => { setListNum(idx * 10) }} className='page' key={idx}>{idx + 1}</button>
                            )
                        }).slice(page, page + pageLimit)
                    }
                    {
                        page < parseInt(shopLength / itmLimit) - pageLimit &&
                        <button onClick={() => { setPage(page + pageLimit) }} className='next'><BsChevronDoubleRight /></button>
                    }

                </div>
                <ul>
                    {
                        shop.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={`/detali/${it.id}`}>
                                        <figure>
                                            <img src={it.api_featured_image} alt={it.name} />
                                        </figure>
                                    </Link>
                                    <div className="desc">
                                        <h3>{it.name}</h3>
                                        <p>
                                            {
                                                it.description &&
                                                it.description.substr(0, 60) + '...'
                                                || 'This product has no description.'
                                            }
                                        </p>
                                        <span>{it.price === '0.0' ? 'SoldOut' : it.price}
                                            {it.price === '0.0' ? '' : it.price_sign}</span>
                                    </div>
                                </li>
                            )
                        }).slice(list, list + itmLimit)
                    }
                </ul>

            </div>
        </div>
    )
}

export default AllList