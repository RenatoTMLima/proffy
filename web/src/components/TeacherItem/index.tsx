import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/49873623?s=460&u=9899fe9d9c921a010e08ad0d8878cacf123920cd&v=4" alt="User"/>
        <div>
          <strong>Renato Takao</strong>
          <span>Finanças</span>
        </div>
      </header>

      <p>
        Amo perder dinheiro
        <br/><br/>
        Venha perder dinheiro na bolsa comigo!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;