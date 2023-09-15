import styled from 'styled-components'
import { baseTheme } from '../styles/theme'

export default function Payment() {
  
  return (
    <div>
      <Wrapper>
		<div>
			<P>Номер телефона</P>
      		<Input
				placeholder="+7(___)___-__-__"
				pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
				maxLength={12}
			/>
			  <P>Сумма к оплате</P>
      		<Input />
	  	</div>
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
const P = styled.p`
	color: white;
	text-align: start;
`;
const Input = styled.input.attrs({type: 'tel'})`
	background: ${baseTheme.colors.bg};
	padding: 10px 10px 5px 10px;
	border: none;
	border-bottom: 1px solid ${baseTheme.colors.border};
	color: ${baseTheme.colors.font};

	&:focus{
		border: none;
		border-bottom: 1px solid ${baseTheme.colors.border};
		outline: none !important;
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

