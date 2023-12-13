import React from 'react'
import Data from '../dataBase/Data'
import 'bootstrap/dist/css/bootstrap.css'
export default function Cars() {
  return (
    <div>
      {
        Data.map((car)=>(
            <div class="card" style={{width: "18rem"}} key={car.id}>
  <img class="card-img-top" src={car.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{car.name}</h5>
    <p class="card-text">{car.color}</p>
   
  </div>
</div>
        ))
      }
    </div>
  )
}
