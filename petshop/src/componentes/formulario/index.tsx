import React, { useState } from 'react';
import type { Animal } from '../../types';

interface FormularioProps {
  aoCadastrar: (animal: Omit<Animal, 'id'>) => void;
}

export const Formulario = ({ aoCadastrar }: FormularioProps) => {

  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [emServico, setEmServico] = useState(false);

  const submeterFormulario = (evento: React.FormEvent) => {
    evento.preventDefault();
    
    if (!nome.trim()) return;

    // Envia o objeto para o pai
    aoCadastrar({
      nome,
      especie,
      emServico
    });

    // Limpa o formulário
    setNome('');
    setEspecie('Cachorro');
    setEmServico(false);
  };

  return (
    <section>
      <h2 className="text-petshop-blue font-montserrat font-semibold text-2xl mb-6">
        Formulário
      </h2>

      <form 
        onSubmit={submeterFormulario}
        className="bg-white p-10 rounded-xl shadow-sm border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          {/* Input: Nome */}
          <div className="md:col-span-4">
            <label className="block text-petshop-blue font-semibold mb-2 text-base">
              Nome do Animal
            </label>
            <input 
              required
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Rex"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-700 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-petshop-blue/20 focus:border-petshop-blue transition-all"
            />
          </div>

          {/* Select: Espécie */}
          <div className="md:col-span-3">
            <label className="block text-petshop-blue font-semibold mb-2 text-base">
              Espécie
            </label>
            <div className="relative">
              <select 
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}
                className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-700 text-base bg-white focus:outline-none focus:ring-2 focus:ring-petshop-blue/20 focus:border-petshop-blue transition-all appearance-none cursor-pointer"
              >
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Pássaro">Pássaro</option>
                <option value="Outro">Outro</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Radio: Em serviço? */}
          <div className="md:col-span-3 flex flex-col justify-end h-20 pb-2">
             <span className="block text-petshop-blue font-semibold mb-3 text-base">
               Em serviço?
             </span>
             <div className="flex gap-6 items-center">
               <label className="flex items-center gap-3 cursor-pointer group">
                 <div className="relative flex items-center">
                   <input 
                    type="radio" 
                    name="servico" 
                    checked={emServico === true}
                    onChange={() => setEmServico(true)}
                    className="peer w-5 h-5 border-gray-300 text-petshop-blue focus:ring-petshop-blue" 
                   />
                 </div>
                 <span className="text-gray-700 text-base group-hover:text-petshop-blue transition-colors">Sim</span>
               </label>
               
               <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                   <input 
                    type="radio" 
                    name="servico" 
                    checked={emServico === false}
                    onChange={() => setEmServico(false)}
                    className="peer w-5 h-5 border-gray-300 text-petshop-blue focus:ring-petshop-blue" 
                   />
                 </div>
                 <span className="text-gray-700 text-base group-hover:text-petshop-blue transition-colors">Não</span>
               </label>
             </div>
          </div>

          {/* Botão */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full h-12 bg-petshop-blue text-white font-semibold text-base rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center group cursor-pointer">
              Adicionar
            </button>
          </div>

        </div>
      </form>
    </section>
  );
};