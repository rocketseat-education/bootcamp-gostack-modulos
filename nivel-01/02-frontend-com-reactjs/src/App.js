import React, {useState, useEffect} from 'react';

import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  // useState retorna um array com 2 posições
  //
  // 1. Variável com seu valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);
  
  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Danilo Vieira'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}></button>
    </>
  );
}

export default App;