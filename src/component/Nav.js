import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ cateList }) => {
    return (
        <nav className="gnb">
            <ul>
                {
                    cateList.map((it, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={`/${it}`}>{it}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    )
}

export default Nav