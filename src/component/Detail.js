import { useParams } from "react-router-dom";
import styled from "styled-components";

const H3 = styled.h3`

`
const Brand = styled.strong`

`
const Cate = styled.p`

`
const Info = styled.p`

`
const Price = styled.span`

`

const Detail = ({ shop }) => {
    const { id } = useParams();
    const itm = shop.find(it => String(it.id) === id);
    console.log(itm)
    return (
        <div className="detail">
            <div className="inner">
                <div className="title">
                    <h2>Product details</h2>
                </div>
                {itm &&
                    <div className="itm">
                        <figure>
                            <img src={itm.api_featured_image} alt={itm.name} />
                        </figure>
                        <div className="desc">
                            <H3>{itm.name}</H3>
                            <Brand>{itm.brand}</Brand>
                            <Cate>{itm.category}</Cate>
                            <Info>{itm.description}</Info>
                            <Price>{itm.price}{itm.price_sign}</Price>
                        </div>
                    </div>
                }


            </div>
        </div>
    )

}

export default Detail;