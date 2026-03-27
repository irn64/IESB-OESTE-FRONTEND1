import { Container } from './components/Container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { CountDown } from './components/countdown';
import { DefaultInput } from './components/defaultImput';
import { Cycles } from './components/cycles';
import { DefaultButton } from './components/defaultButtom';
import { Footer } from './components/footer';

import { PlayCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/globals.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p></p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            {/* Mantivemos apenas o botão principal de Play */}
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      {/* Nosso novo rodapé entra aqui, no seu próprio Container! */}
      <Container>
        <Footer />
      </Container>
    </>
  );
}