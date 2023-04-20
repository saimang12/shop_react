import React, { useState } from 'react'

const Cart = ({ cart }) => {
    const addItm = () => {
        alert('추가')

    }
    const [itmNum, setItmNum] = useState()
    return (
        <div>
            {
                cart &&
                cart.map((it, idx) => {
                    return (
                        <li key={it.id}>{it.id}{it.name}{it.num}

                        </li>
                    )
                })
            }
        </div>
    )
}

export default Cart