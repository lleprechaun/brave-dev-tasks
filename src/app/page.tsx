'use client'
import styled from 'styled-components'
import Mobile from '@/app/pages/mobile'
import Payment from '@/app/pages/payment'
import { baseTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <Wrapper>
      <Router>
        <Header>Терминал оплаты мобильного телефона</Header>
        <Routes>
          <Route path="" element={ <Mobile /> } />
          <Route path="payment" element={ <Payment phone='' price={0} /> } />
        </Routes>
      </Router>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.div`
  color: ${baseTheme.colors.font};
  font-size: ${baseTheme.fonts.header};
  border-bottom: 1px solid ${baseTheme.colors.border};
`;