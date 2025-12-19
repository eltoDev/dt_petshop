import { useState } from 'react';
import { Header } from './componentes/header';
import { Formulario } from './componentes/formulario';
import { ListaAnimais } from './componentes/listaAnimais';
import type { Animal } from './types';

function App() {
  // Estado que armazena a lista de animais
  const [animais, setAnimais] = useState<Animal[]>([]);

  // Função para adicionar um novo animal
  const adicionarAnimal = (animal: Omit<Animal, 'id'>) => {
    const novoAnimal: Animal = {
      ...animal,
      id: crypto.randomUUID() // Gera um ID único nativo do navegador
    };
    setAnimais([...animais, novoAnimal]);
  };

  // Função para remover um animal pelo ID
  const removerAnimal = (id: string) => {
    setAnimais(animais.filter(animal => animal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">
        {/* Passa a função de cadastro para o formulário */}
        <Formulario aoCadastrar={adicionarAnimal} />
        
        {/* Passa a lista de animais e a função de remoção para a lista */}
        <ListaAnimais animais={animais} aoRemover={removerAnimal} />
      </main>
    </div>
  );
}

export default App;