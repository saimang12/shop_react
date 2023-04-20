import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsDash, BsPlusLg } from 'react-icons/bs'

const DetailItm = styled.div`
    padding: 100px 0;
`
const Inner = styled.div`
    width: 1200px;
    margin: 0 auto;
`
const Title = styled.div`
    text-align: center;
    margin: 0 0 60px 0;
`
const H2 = styled.h2`
    font-size:30px;
    font-weight:700;
`
const ItmInner = styled.div`

`
const Itm = styled.div`
    display: flex;
    gap: 30px;
`
const Figure = styled.figure`
    flex: 5;
`
const Img = styled.img`
    width: 100%;
    max-height: 600px;
    object-fit: cover;
`
const Desc = styled.div`
    position: relative;
    flex: 5;
    padding: 30px 10px;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
`
const H3 = styled.h3`
    font-size:20px;
    font-weight:500;
    line-height: 1.1;
    margin: 0 0 10px 0;
`
const Brand = styled.strong`
    display: block;
    font-weight:500;
    margin: 0 0 30px 0;
`
const Info = styled.p`
    font-size:15px;
    line-height: 1.1;
    margin: 0 0 30px 0;
`
const Price = styled.span`
    position: relative;
    display: block;
    font-size:15px;
    &::before {
        content: "";
        position: absolute;
        inset: auto auto -30px 0;
        width: 100%;
        height: 1px;
        background:#ddd;
    }
`
const SelectNum = styled.div`
    position: absolute;
    inset: auto auto 50px 50%;
    transform: translate(-50%,0);
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    margin: auto 0 0 0;
`
const ItmNum = styled.div`
    display: flex;
    gap: 20px;
    padding: 5px 10px;
    border-radius: 15px;
    align-items: center;
    background: rgb(255 239 239);

    
`
const Delete = styled.button`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background: none;
    font-size:20px;
`
const TotalNum = styled.p`

`
const Add = styled.button`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background: none;
    font-size:20px;
`
const TotalPriceInner = styled.div`
    display: flex;
    align-items: center;
`
const TotalPrice = styled.span`
    font-size: 15px;
`
const BuyMenu = styled.div`

`


const Detail = ({ shop, cart, setCart }) => {
    const [num, setNum] = useState(1)
    const { id } = useParams();
    const itm = shop.find(it => String(it.id) === id);
    const addCart = () => {
        // 1. 같은id가 cart 배열에 있는지 확인한다.
        // 2. 있다면 이미 있다는 알림 그게 아니면 cart배열에 새로운 아이템을 추가한다. (새 배열=[...cart, {추가할 아이템})] 
        // 3. 스테이트 변경함수에 새 배열을 넣는다.
        const match = cart.find(it => it.id == itm.id);
        if (match) {
            alert('이미 같은 상품이 있다.');

        } else if (num < 1) {
            alert('수량을 선택해주세요')
        } else {
            const cartItm = [
                ...cart, {
                    id: itm.id,
                    name: itm.name,
                    description: itm.description,
                    price: itm.price,
                    price_sign: itm.price_sign,
                    api_featured_image: itm.api_featured_image,
                    num: num,
                }
            ]
            setCart(cartItm)
        }
    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <DetailItm>
            <Inner>
                <Title>
                    <H2>Product details</H2>
                </Title>
                {itm &&
                    <ItmInner>
                        <Itm>
                            <Figure>
                                <Img src={itm.api_featured_image} alt={itm.name} />
                            </Figure>
                            <Desc>
                                <H3>{itm.name}</H3>
                                <Brand>{itm.brand}</Brand>
                                <Info>{itm.description &&
                                    itm.description
                                    || 'This product has no description.'}</Info>
                                <Price>{itm.price > 0 ? itm.price : 'SoldOut'}{itm.price > 0 ? itm.price_sign : ''}</Price>
                                <SelectNum>
                                    <ItmNum>
                                        <Delete onClick={() => { num > 0 ? setNum(num - 1) : setNum(num) }}><BsDash /></Delete>
                                        <TotalNum>{num}</TotalNum>
                                        <Add onClick={() => { setNum(num + 1) }}><BsPlusLg /></Add>
                                    </ItmNum>
                                    <TotalPriceInner>
                                        {

                                            itm.price > 0 ?
                                                <TotalPrice>Total | {itm.price * num} {itm.price_sign}</TotalPrice>
                                                : <TotalPrice>SoldOut</TotalPrice>
                                        }
                                    </TotalPriceInner>

                                </SelectNum>
                            </Desc>
                        </Itm>
                        <BuyMenu>
                            <button onClick={addCart}>addcart</button>
                        </BuyMenu>
                    </ItmInner>

                }


            </Inner>
        </DetailItm >
    )

}

export default Detail;