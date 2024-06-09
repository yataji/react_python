import React, { useEffect, useState } from "react";
import Categories from "../Components/categories/categories";
import CardDefault from "../Components/cards/card";
import { getAllLocals } from "../Api/axiosConfig";
import { UseLocalData } from "../Context/useLocal";

function Discover() {
  const { localData, setDataLocal } = UseLocalData();
  useEffect(() => {
    getAllLocals()
      .then((response) => {
        // console.log(response.data);
        setDataLocal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-screen py-10 flex items-center flex-col">
      <section className="w-[95%] flex items-center justify-center">
        <Categories />
      </section>
      <section className="w-[95%] flex justify-center flex-wrap py-5 gap-5">
        {localData.map((items, index) => (
          <button
            key={index}
            className="w-[320px] h-[440px] flex justify-center"
          >
            <CardDefault
              place={items.place}
              stars={items.stars}
              distance={items.distance}
              data={items.data}
              price={items.price}
              duration={items.duration}
            />
          </button>
        ))}
      </section>
    </div>
  );
}

export default Discover;
