import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CateList = ({ shop, cateList }) => {
    const { cate } = useParams();
    const cateItm = shop.filter(it => it.category === cate);
    const coverImg = (e) => {
        e.target.src = process.env.PUBLIC_URL + '/img/cover.png'
    }
    return (
        <section className="CateList">
            <div className="inner">
                <ul>
                    {
                        cateItm.map(it => {
                            return (
                                <li key={it.id}>
                                    <Link to={`/detali/${it.id}`}>
                                        <figure>
                                            <img src={it.api_featured_image} alt={it.name} onError={coverImg} />
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
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default CateList