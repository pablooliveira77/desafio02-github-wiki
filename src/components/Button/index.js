import React from 'react';
import { ButtonContainer } from './styles.js';

export default function Button({onclick}) {
   return (
      <ButtonContainer onClick={onclick}>
         Buscar
      </ButtonContainer>
   );
}