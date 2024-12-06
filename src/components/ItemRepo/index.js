import React from 'react';
import { ItemContainer } from './styles.js';

export default function ItemRepo({ repo, handleRemoveRepo }) {

   const handleRemove = () => {
      return handleRemoveRepo(repo.id)
   }
   return (
      <ItemContainer>
         <h3>{repo.name}</h3>
         <p>{repo.description}</p>
         <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositorio</a> <br />
         <button className='remove' onClick={handleRemove}>Remover</button>
         <hr />
      </ItemContainer>
   );
}