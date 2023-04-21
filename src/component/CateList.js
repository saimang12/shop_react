import React from 'react'
import { useParams } from 'react-router-dom'

const CateList = ({ shop, cateList }) => {
    const { cate } = useParams();
    const cateItm = shop.filter(it => it.category === cate)
    return (
        <section className="cateList">

            <ul>
                {
                    cateItm.map(it => {
                        return (
                            <li key={it.id}>
                                {
                                    it.name
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default CateList