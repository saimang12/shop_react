import React, { useState } from 'react'



const Search = ({ search }) => {


    return (
        <div className="search">
            <div className="inner">
                {
                    search.map((it, idx) => {
                        return (
                            <div>{it.name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search