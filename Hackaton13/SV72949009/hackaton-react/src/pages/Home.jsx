import Contador from '../components/Contador';
import Temporizador from '../components/Temporizador';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Contador />
      <Temporizador />
    </div>
  );
}