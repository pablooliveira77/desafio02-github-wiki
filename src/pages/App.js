import React, { useState } from 'react';
import gitlogo from '../assets/github.png';
import api from "../services/api.js";
import { Container } from './styles.js'
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';

function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (isExist) {
        alert('Repositorio já adicionado')
        return
      }
      setRepos([...repos, data])
      setCurrentRepo('')
      return
    }
    alert('Repositorio não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id)
    setRepos(newRepos)
  }

  return (
    <Container>
      <img src={gitlogo} alt="logo" width={72} height={72} />

      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onclick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}



    </Container>
  );
}

export default App;