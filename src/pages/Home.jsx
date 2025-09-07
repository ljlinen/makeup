import Header from "../features/homepage/componets/Header";
import "../features/homepage/assets/css/home.css";

function Home () {
  return (
    <>
      <div className="blobs">
        <div className="blob top left"></div>
        <div className="blob blured top right"></div>
        <div className="blob blured bottom left"></div>
        <div className="blob bottom right"></div>
      </div>
      <Header />
    </>
  )
}

export default Home;