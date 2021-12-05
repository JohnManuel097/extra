import React from 'react';
import Inventario from '../Screen/Inventario';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Inventario key={product.id} product={product} onAdd={onAdd}></Inventario>
        ))}
      </div>
    </main>
  );
}