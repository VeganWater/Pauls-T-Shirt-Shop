import {useState, useEffect} from 'react'
import {BrowserRouter as Router , Route, Routes, useParams} from 'react-router-dom'
import TShirts from './components/TShirts'
import ShowTshirt from './components/ShowTshirt'

function App() {
  const [tshirts, setTshirts] = useState([])
  const [tshirt, setTshirt] = useState([])
  const [buy, setbuy] = useState(false)

    useEffect(() => {
    const getTshirts = async () => {
      const tasksFromServer = await fetchTshirts()
      setTshirts(tasksFromServer)
    }

    getTshirts()
  }, [])

  //Fetch TShirts
  const fetchTshirts = async () =>{
    const res = await fetch('http://127.0.0.1:8000/api/products/',{
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      const data =await res.json()

      return data
  }
  
  //fetch Tshirt
  const fetchTshirt = async (id) =>{
    const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`,{
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'

      }
    })
    const data =await res.json()
    return data
  }

  //Show Tshirt
  const showTshirt = async (id) =>{

    const tshirtData = await fetchTshirt(id)
    if(buy == false){
      setTshirt(tshirtData)
      setbuy(!buy)
    }
    else if(tshirt.id != tshirtData.id){
      setTshirt(tshirtData)
    }
    else{
      setbuy(!buy)
    }
  }

  //Buy Tshirt
  const buyTshirt = async(id)=>{
    if(tshirt.quantity> 0){
      const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`,{
      headers: {
      'Accept': 'application/json',
      },
      method: "PATCH"
      })
    const data = res.json()


    alert('Gekauft')
    window.location.reload()

    }
    else{
      alert('Ausverkauft')
    }
  }


  return (

    <div>
      {buy && <ShowTshirt buy={buyTshirt}  tshirt={tshirt}/>}
      {/* {!buy &&  <TShirts tshirts={tshirts} clickTshirt={showTshirt}/>} */}
      
      <TShirts tshirts={tshirts} clickTshirt={showTshirt}/>
    </div>
  );
}

export default App;
