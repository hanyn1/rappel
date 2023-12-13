import React from 'react'
import Data from '../dataBase/Data'
import 'bootstrap/dist/css/bootstrap.css'
import AddCar from './AddCar'
import { useState } from 'react'
export default function Cars() {
    //inisialization ll base de données
    const [cars,setCars]=useState(Data)
    const handleCars=(newCar)=>{
        const updateCars=[...cars,{...newCar, id:cars.length+1}]
        setCars(updateCars)
    }
  return (
    <div>
      {
        cars.map((car)=>(
            <div class="card" style={{width: "18rem"}} key={car.id}>
  <img class="card-img-top" src={car.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{car.name}</h5>
    <p class="card-text">{car.color}</p>
   
  </div>
</div>
        ))
      }
      <AddCar onAdd={handleCars}/>
    </div>
  )
}
