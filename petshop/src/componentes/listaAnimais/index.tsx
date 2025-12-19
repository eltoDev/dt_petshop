import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import type { Animal } from '../../types';

interface ListaAnimaisProps {
  animais: Animal[];
  aoRemover: (id: string) => void;
}

export const ListaAnimais = ({ animais, aoRemover }: ListaAnimaisProps) => {
  const [filtro, setFiltro] = useState('');

  // Filtra a lista com base no texto digitado (case insensitive)
  const animaisFiltrados = animais.filter(animal => 
    animal.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-petshop-blue font-montserrat font-semibold text-2xl w-full md:w-auto">
          Lista de Animais
        </h2>
        
        <input 
          type="text" 
          placeholder="Filtro por nome"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full md:w-80 h-12 border border-gray-300 rounded-lg px-4 text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-petshop-blue/20 focus:border-petshop-blue transition-all"
        />
      </div>

      <div className="flex flex-col gap-4">
        {animaisFiltrados.length === 0 ? (
          <p className="text-gray-500 text-center py-8 bg-white rounded-xl border border-dashed border-gray-300">
            Nenhum animal encontrado.
          </p>
        ) : (
          animaisFiltrados.map((animal) => (
            <div 
              key={animal.id}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-1">
                 <h3 className="text-petshop-blue font-semibold text-base md:text-lg">
                   {animal.nome}
                 </h3>
                 <p className="text-gray-500 text-sm font-medium">
                   {animal.especie} {animal.emServico && <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs ml-2 border border-green-100">Em serviço</span>}
                 </p>
              </div>

              <button 
                onClick={() => aoRemover(animal.id)}
                className="bg-[#D32F2F] p-2.5 rounded-lg text-white hover:bg-red-700 transition-colors shadow-sm flex items-center justify-center group cursor-pointer"
                title="Excluir"
              >
                <TrashIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};