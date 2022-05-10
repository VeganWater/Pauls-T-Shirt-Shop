function ShowTshirt({tshirt, buy}) {

    return (
        <div className="div">
            <div>            
                <h1>{tshirt.tshirt}</h1>
            </div>
            <div>
                <img src="" alt="Bild" className="imgTshirt" />
            </div>
            <br />
            <div className="divTshirts">
                <div className="divInformation">{tshirt.information}</div>
                <div className="divPrice">Anzahl:{tshirt.quantity}</div>
                <div className="divPrice">{tshirt.price} €</div>
                <button onClick={()=>buy(tshirt.id)}>Kaufen</button>
            </div>
        </div>
    )
}

export default ShowTshirt