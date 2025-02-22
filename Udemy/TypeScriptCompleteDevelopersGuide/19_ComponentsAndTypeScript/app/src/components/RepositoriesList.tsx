import React from "react";
import { useState } from 'react';
import { useActions } from "../hooks/useActions";
import { useSelector } from 'react-redux';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state: any) => state.repositories);
  console.log(loading, error, data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  return <div>
    <form action="" onSubmit={onSubmit}>
      <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  </div>
}

export default RepositoriesList;
