import React from "react";
import { ButtonQuickSearch } from "./components/ButtonQuickSearch";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5 border-2 bg-grayLighter400 rounded-xl mt-6">
      <div className="flex justify-center items-center mb-5">
        <h2 className="px-5 text-xl lg:text-2xl text-black whitespace-nowrap">Pesquise também por:</h2>
      </div>

      <div className="flex w-full mt-5 lg:mt-10 justify-center gap-40">
        <div className="grid grid-cols-4 grid-rows-1 gap-3 lg:gap-28">
          <ButtonQuickSearch
            link='/trips/search?text=hotel'
            icon="/hotel.svg"
            label="Hotel"
          />
          <ButtonQuickSearch
            link='/trips/search?text=fazenda'
            icon="/fazenda.svg"
            label="Fazenda"
          />
          <ButtonQuickSearch
            link='/trips/search?text=Chalé'
            icon="/chale.svg"
            label="Chalé"
          />
          <ButtonQuickSearch
            link='/trips/search?text=pousada'
            icon="/pousada.svg"
            label="Pousada"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
