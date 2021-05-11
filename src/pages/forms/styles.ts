import { shade } from 'polished';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;


export const Logo = styled.img`
  width: 150px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width:150px;
  margin-top: 10px;
  padding: 10px 50px;
  border: 0;
  background-color: #04d361;
  color: #FFF;
  border-radius:2px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`

export const QuestionsLists =  styled.div`
  margin-top: 80px;
  max-width: 700px;

  .check {
    color: #04d361;
  }

  a {
    background-color: #FFF;
    border-radius: 5px;
    width:100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    border: 1px solid #FFF;
    display: flex;
    align-items: center;
    // transition: background-color 0.2s;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    };


    &:hover {
      // background-color: #E3E8F1;
      // border: 1px solid #BBB;
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin-left: 10px;
    }

    svg {
      color:#cbcbd6;
    }

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`
