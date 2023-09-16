'use client'
import styled from 'styled-components'
import Mobile from '@/app/mobile/page'
import { baseTheme } from './styles/theme'

export default function Home() {
  return (
    <Wrapper>
        <Header>Терминал оплаты мобильного телефона</Header>
        <Mobile /> 
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