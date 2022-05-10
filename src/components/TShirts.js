import TShirt from './TShirt'

const TShirts = ({tshirts, clickTshirt}) => {
    return (
        <div>
            {tshirts.map((tshirt)=>(
                <TShirt tshirt={tshirt} clickTshirt={clickTshirt} />
                
            ))}
        </div>
    )
}

export default TShirts