const Cart = ({ cart, setCart }) => {

    const addCart = (id) => {
        // 카트에 담긴 물품 수량 조정
        const newCart = cart.map(it => it.id === id ? { ...it, amount: it.amount + 1 } : it);
        setCart(newCart);
    }


    return (
        <div>
            {
                cart &&
                cart.map((it, idx) => {
                    return (
                        <>
                            <li key={it.id}>{it.id}{it.name}{it.amount}</li>
                            <button onClick={() => { addCart(it.id) }}>+</button>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Cart