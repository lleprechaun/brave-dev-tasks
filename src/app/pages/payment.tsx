import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { $message } from '@/app/logic/MessageManager';
import InputMask from 'react-input-mask';
import { pay } from '@/app/logic/PayManager'

type Payment = {
  phone: string,
  price: number,
};

export default function Payment({ phone, price }: Payment) {

  /*----------------------------------ARGUMENTS----------------------------------*/
  const location = useLocation();
  const navigate = useNavigate();
  const nameOperator = location.state.nameOperator;

  /*----------------------------------FUNCTIONS----------------------------------*/

  function priceCheck( e  : number) {
    e > 1000 || e < 0 ? $message.showError('Сумма оплаты должны быть в пределах от 1 до 1000') : price = e
  }

  async function payment(phone : string, price : number) {
    await pay(phone, price)
    .then((res) => {
      $message.showSuccess(res.type);

      setTimeout(() => {
        navigate('/',{ replace: false });
      }, 1000);
    })
    .catch((error) => {
      $message.showError(error.message);
    });
  }
  return (
      <Wrapper>
		  <div style={{marginTop: '2vw'}}>
        <P>Мобильный оператор</P>
        <Input
          type='text'
          required
          disabled
          placeholder={nameOperator}
			  />
			  <P>Номер телефона</P>
        <InputTel
          placeholder="+7(___)___-__-__"
          mask="+7(999)999-99-99"
          onChange = {(e : any) => phone = e.target.value}
        />
			  <P>Сумма к оплате</P>
      	<Input
          type='number'
          max={1000}
          min={1}
          onChange = {(e : any) => priceCheck(Number(e.target.value))}
        />
        <Input
          type='button'
          defaultValue={'Оплатить'}
          onClick={() => payment(phone, price)}
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

  &[type="text"] {
    cursor: not-allowed;
  }
`;

const InputTel = styled(InputMask)`
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
`;