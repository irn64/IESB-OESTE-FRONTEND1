import { Container } from '../../components/Container';
import { CountDown } from '../../components/countdown';
import { MainForm } from '../../components/mainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}