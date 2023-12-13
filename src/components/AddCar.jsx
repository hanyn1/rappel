import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
export default function AddCar({onAdd}) {
    const [newCar,setNewCar]=useState({
        name:"",
        color:"",
        image:""
    })
    const handle=()=>{

        if (newCar.name.trim() === '' || newCar.color.trim() === '' || newCar.image.trim() === '' ) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }
      

        onAdd(newCar)
    setNewCar({
        name:"",
        color:"",
        image:""
    })

    Swal.fire({
        icon: 'success',
        title: 'Car Added!',
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      })
    }
    
  return (
    <div>
      <h1 style={{color:'red'}}>Add new car</h1>
      <form >
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Color
          </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.color}
            onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.image}
            onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={handle}>
          Add Car
        </button>
      </form>
    </div>
  )
}
