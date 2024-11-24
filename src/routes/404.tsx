import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/404')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <h3>Welcome 404!</h3>
    </div>
  );
}
