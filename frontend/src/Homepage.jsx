import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Paper from "./assets/images/paper.jpg";

function Homepage() {
  return (
    <>
      <div className="w-screen mx-12 h-[800px] z-10 mt-20 rounded-xl">
        <Header />
        <MobileHeader />
        <img className="w-full" src={Paper} alt="Paper image" />
      </div>
    </>
  );
}

export default Homepage;
