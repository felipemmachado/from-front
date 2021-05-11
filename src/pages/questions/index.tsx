import React from 'react';

import { Title, Logo, Button, QuestionsLists } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';
import { CgRadioCheck } from 'react-icons/cg';

import logoImg from '../../assets/logo.png'

const Questions: React.FC = () => (
  <>
    <Logo src={logoImg}></Logo>
    <Title>Perguntas</Title>
    <Button>Nova</Button>
    <QuestionsLists>
      <a href="teste">
        <CgRadioCheck size={40} />
        <div>
          <strong>Pergunta 1</strong>
          <p>Descrição da Pergunta 1</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <AiFillCheckCircle className="check" size={40} />
        <div>
          <strong>Pergunta 1</strong>
          <p>Descrição da Pergunta 1</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <CgRadioCheck size={40} />
        <div>
          <strong>Pergunta 1</strong>
          <p>Descrição da Pergunta 1</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </QuestionsLists>
  </>
)

export default Questions;
