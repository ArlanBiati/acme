import { Container, Title, Description } from './styles';

interface RepositoryCardProps {
  title: string;
  description: string;
}

export function RepositoryCard({ title, description }: RepositoryCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
