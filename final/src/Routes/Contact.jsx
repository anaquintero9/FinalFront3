import React from 'react';
import Form from '../Components/Form';
import { useDentistStates } from '../Components/utils/global.context';

const Contact = () => {
  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? 'App contact' : 'dark contact'}>
        <h2>Quieres saber más?</h2>
        <p>Envíanos tus preguntas y te contactaremos</p>
      <Form />
    </div>
  );
};

export default Contact;
