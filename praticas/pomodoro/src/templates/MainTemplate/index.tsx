import { Container } from '../../components/Container';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { Menu } from '../../components/menu';

type MainTemplateProps = {
  children: React.ReactNode; // Tipagem para aceitar elementos React dentro da tag
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}