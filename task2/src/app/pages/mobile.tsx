import styled from 'styled-components'
import { baseTheme } from '../styles/theme'

export default function Mobile() {
  const operators = [
    {
      id: 1,
      name: 'МТС',
      img: '@/../images/mts.png',
    },
    {
      id: 2,
      name: 'Билайн',
      img: '@/../images/beeline.png',
    },
    {
      id: 3,
      name: 'Мегафон',
      img: '@/../images/megafon.png',
    },
  ];
  return (
    <div>
      <Wrapper>
      {
        operators.map(op => (
          <MobileOperators key={op.id}>
            <Img
              src={op.img}
            />
            <Name>{op.name}</Name>
          </MobileOperators>
        ))
      }
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  &:hover{
    background: #000;
  }
`;

const Img = styled.img`
  border-radius: 100%;
  width: 30px;
  cursor: inherit;
  flex-grow:0;
`;

const Name = styled.p`
  border-color: ${baseTheme.colors.border};
  color: ${baseTheme.colors.font};
  font-size: ${baseTheme.fonts.title};
  border: none;
  cursor: inherit;
  text-align: start;
  font-size: 2em;
  flex-grow: 1;
`;

