import { useState } from 'react';
import { Header } from './componentes/header';
import { Formulario } from './componentes/formulario';
import { ListaAnimais } from './componentes/listaAnimais';
import type { Animal } from './types';

function App() {
  // Gerenciamento de estado da lista principal
  const [animais, setAnimais] = useState<Animal[]>([]);

  // Handler para criação de novo animal com geração de ID
  const adicionarAnimal = (animal: Omit<Animal, 'id'>) => {
    const novoAnimal: Animal = {
      ...animal,
      id: crypto.randomUUID() // Gera um ID único nativo do navegador
    };
    setAnimais([...animais, novoAnimal]);
  };

  // Handler para exclusão de item da lista
  const removerAnimal = (id: string) => {
    setAnimais(animais.filter(animal => animal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      {/* Container principal centralizado */}
      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">
        <Formulario aoCadastrar={adicionarAnimal} />
        
        <ListaAnimais animais={animais} aoRemover={removerAnimal} />
      </main>
    </div>
  );
}

export default App;