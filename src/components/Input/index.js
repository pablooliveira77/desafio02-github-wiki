import React from 'react';
import { InputContainer } from './styles.js';

export default function Input({value, onChange}) {
   return (
      <InputContainer value={value} onChange={onChange} >
         <input type="text" />
      </InputContainer>
   );
}