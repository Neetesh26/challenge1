import React from "react";

const Products = ({ item }) => {
  return (
    <div>
       <div
              key={item.id}
              className="border rounded p-3 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <p className="mt-2 text-sm font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
    </div>
  );
};

export default Products;
