import React from 'react';
import Search from './Search';
import Data from '../dataBase/Data';
import 'bootstrap/dist/css/bootstrap.css';
import AddCar from './AddCar';
import { useState } from 'react';

export default function Cars() {
  // Initialization of the database
  const [cars, setCars] = useState(Data);
  const [filter, setFilter] = useState('');

  const handleCars = (newCar) => {
    const updatedCars = [...cars, { ...newCar, id: cars.length + 1 }];
    setCars(updatedCars);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Search onSearchChange={handleFilter} />

      {filteredCars.map((car) => (
        <div className="card" style={{ width: "18rem" }} key={car.id}>
          <img className="card-img-top" src={car.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{car.name}</h5>
            <p className="card-text">{car.color}</p>
          </div>
        </div>
      ))}
      <AddCar onAdd={handleCars} />
    </div>
  );
}
