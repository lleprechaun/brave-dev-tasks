import styled from 'styled-components'
import { baseTheme } from '../styles/theme'
import { useLocation } from 'react-router-dom';

export default function Payment() {
  const location = useLocation();
  const nameOperator = location.state.nameOperator;
  return (
      <Wrapper>
		  <div style={{marginTop: '2vw'}}>
        <P>Мобильный оператор</P>
        <Input
          type='text'
          required
          disabled
          defaultValue={nameOperator}
			  />
			  <P>Номер телефона</P>
        <Input
          type='tel'
			    placeholder="+7(___)___-__-__"
          required
			    pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
			    maxLength={12}
			  />
			  <P>Сумма к оплате</P>
      	<Input
          type='number'
          max={1000}
          min={1}
        />
        <Input
          type='button'
          defaultValue={'Оплатить'}
        />
	  	</div>
      </Wrapper>
  )
}

/*----------------------------------STYLED----------------------------------*/
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
const Input = styled.input`
	background: ${baseTheme.colors.bg};
	padding: 10px 10px 5px 10px;
	border: none;
	border-bottom: 1px solid ${baseTheme.colors.border};
	color: ${baseTheme.colors.font};
  width: 100%;
  font-size: ${baseTheme.fonts.title};
  margin: 10px 0;

	&:focus{
		border: none;
		border-bottom: 1px solid ${baseTheme.colors.border};
		outline: none !important;
	}

  &[type="button"] {
    background: ${baseTheme.colors.font};
    border-radius: 20px;
    color: ${baseTheme.colors.bg};
    padding: 5px 10px;
    cursor: pointer;
    font-size: ${baseTheme.fonts.title};
    margin: 15px 0;
    border: 1px solid ${baseTheme.colors.border};
  }
  &[type="button"]:active {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.font};
  }
`;