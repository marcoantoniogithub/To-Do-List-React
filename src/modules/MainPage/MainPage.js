import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Card from '../Card/index';
import CardBody from '../CardBody';
import CardTitle from '../CardTitle';

export default function MainPage() {

  const [repositories, setRepositories] = useState([]);
  const [repositoriesFiltered, setRepositoriesFiltered] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function inputDate(event) {
    const valueInput = event.target.value.trim().toLocaleLowerCase();
    let retorno = repositoriesFiltered.filter(
      element => {
        return element.name.trim().toLocaleLowerCase().indexOf(valueInput) != -1;
      }
    );
    if(valueInput.length > 0) {
      setRepositoriesFiltered(retorno);
    } else {
      setRepositoriesFiltered(repositories);
    }
    
    setInputValue(event.target.value);
  }

  useEffect( async () => {
    const respose = await fetch('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1');
    const data = await respose.json();
    setRepositories(data.items);
    setRepositoriesFiltered(data.items);
    console.log(data);
  }, []);

  return (
    <>
      <nav>
        <h1>Repositories</h1>
      </nav>
      <div class="div-search">
        <input placeholder='Search for repositories' onChange={inputDate} value={inputValue}/>
      </div>
      <div class="div-repos">
        {repositoriesFiltered.map(element => (
          <Card>
            <CardTitle img={element.owner.avatar_url} title={element.name}></CardTitle>
            <CardBody starCount={element.stargazers_count} forkCount={element.forks}></CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}