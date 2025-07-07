import Navbar from "../components/Navbar";
import Contador from "../components/Contador";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Esta es la pagina de Home</h1>
        <Contador />
      </div>
    </>
  );
}

export default Home;
