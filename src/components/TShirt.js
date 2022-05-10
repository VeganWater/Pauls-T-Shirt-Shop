const TShirt = ({tshirt, clickTshirt}) => {
    return (
        <div className="divTshirts" onClick={()=>clickTshirt(tshirt.id)} >
            <div className="divTshirt">
                {tshirt.tshirt}
            </div>
            <div className="divInformation">
                {tshirt.information}
            </div>
            <div className="divQuantity">
                {tshirt.quantity}
            </div>
            <div className="divPrice">
                {tshirt.price} €
            </div>
        </div>
    )
}

export default TShirt