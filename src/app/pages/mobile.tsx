import styled from 'styled-components'
import { baseTheme } from '../styles/theme'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mobile() {

  /*----------------------------------ARGUMENTS----------------------------------*/
  const navigate = useNavigate();

  const initialOperators = [
    { id: 1, name: 'МТС', img: '@/../images/mts.png', },
    { id: 2, name: 'Билайн', img: '@/../images/beeline.png', },
    { id: 3, name: 'Мегафон', img: '@/../images/megafon.png', },
  ];
  const [operators, setOperators] = useState(initialOperators);

  let nameOperator = '';
  /*----------------------------------FUNCTIONS----------------------------------*/
  function addNewOperator() {
    let index = operators[operators.length -1].id;
    index = index + 1;
    setOperators([
      ...operators,
      {
        id: index,
        name: nameOperator,
        img: '',
      }
    ]);
  };

  return (
    <div>
      <Wrapper>
        <Wrapper>
          <Input
            type='text'
            placeholder='Добавить новый оператор'
            onChange={(e) => nameOperator = e.target.value}
          />
          <Input
            type='button'
            defaultValue={'Добавить'}
            onClick={addNewOperator}
          />
        </Wrapper>
        
        <P>Выбрать существующий</P>
        {
          operators.map(op => (
            <MobileOperators key={op.id} onClick={() => navigate('/payment', {state: {nameOperator: op.name}})}>
              <Img
                src={op.img}
              />
              <P>{op.name}</P>
            </MobileOperators>
          ))
        }
      </Wrapper>
    </div>
  )
}

/*----------------------------------STYLED----------------------------------*/
const Wrapper = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
	background: ${baseTheme.colors.bg};
	padding: 5px 10px 5px 10px;
	border: none;
	border-bottom: 1px solid ${baseTheme.colors.border};
	color: ${baseTheme.colors.font};
  font-size: 1.5max;
  margin: 10px 0;

	&:focus{
		border: none;
		border-bottom: 1px solid ${baseTheme.colors.border};
		outline: none !important;
	}

  &[type="text"] {
    width: 100%;
    text-align: center;
  }
  &[type="text"]::placeholder {
    text-align: center;
  }

  &[type="button"] {
    background: ${baseTheme.colors.font};
    border-radius: 20px;
    color: ${baseTheme.colors.bg};
    padding: 5px 10px;
    cursor: pointer;
    font-size: 1vmax;
    margin: 15px 0;
    border: 1px solid ${baseTheme.colors.border};
  }

  &[type="button"]:active {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.font};
  }
`;

const MobileOperators = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  border-bottom: 1px solid ${baseTheme.colors.border};
  margin: 10px 0;
  padding: 5px 10px;
  cursor: pointer;

  &:active {
    background: ${baseTheme.colors.font};
    border: 1px solid ${baseTheme.colors.border};
  }
`;

const Img = styled.img`
  border-radius: 100%;
  width: 30px;
  cursor: inherit;
  flex-grow:0;
`;

const P = styled.p`
  border-color: ${baseTheme.colors.border};
  color: ${baseTheme.colors.font};
  font-size: ${baseTheme.fonts.title};
  border: none;
  cursor: inherit;
  text-align: start;
  font-size: ${baseTheme.fonts.title};
  flex-grow: 1;

  &:active{
    color: ${baseTheme.colors.bg};
  }
`;

