import React from 'react';
import './Filters.scss';
import Dropdown from '../Dropdown/Dropdown';
import PriceRange from '../PriceRange/PriceRange';

function Filters() {
  return (
    <div className="filters">
      <p>Filter By</p>
      <div className="mt-23">
        <Dropdown
          placeholder="Collections"
          options={[{ value: 1, label: 'Special' }]}
          smallSize
        />
      </div>
      <div className="mt-23">
        <Dropdown
          placeholder="Color"
          options={[{ value: 1, label: 'Black' }]}
          smallSize
        />
      </div>
      <div className="mt-23">
        <Dropdown
          placeholder="Category"
          options={[{ value: 1, label: 'Chairs' }]}
          smallSize
        />
      </div>
      <div className="mt-30">
        <PriceRange />
      </div>
    </div>
  );
}

export default Filters;
