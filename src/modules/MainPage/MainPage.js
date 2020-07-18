import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Button from '../Button/index';

export default function MainPage() {

  const [repositories, setRepositories] = useState([]);

  // mock add repo
  function newRepositorie() {
    setRepositories([...repositories, {id: Math.round(Math.random()), name: "New Repo"}])
  }

  function clearRepos() {
    setRepositories([]);
  }

  function teste(id) {
    setRepositories([
      repositories.filter( element => {
        return element.id !== id;
      }
    )]);  
  }

  // useEffect(()=> {
  //   console.log('new Repositorie');
  // }, [repositories]);

  useEffect( async () => {
    const respose = await fetch('https://api.github.com/users/marcoantoniogithub/repos');
    const data = await respose.json();
    setRepositories(data);
  }, []);

  return (
    <>
      <div class="div-repos">
        {repositories.map(element => (
          <div class="container-repo">
            <span>{element.id}</span>
            <span class="name-repo">{element.name}</span> 
            <span onClick={(e) => teste(element.id)}>
              <img src="https://image.flaticon.com/icons/svg/864/864390.svg" alt="delete" width="20px"/>
            </span>
          </div>
        ))}
      </div>
      <div class="div-button">
        <Button style={'primary'} onClick={newRepositorie}>Add Repo</Button>
        <Button style={'secundary'} onClick={clearRepos}>Clear All Repos</Button>
      </div>
    </>
  );
}