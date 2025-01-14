import Header from "./Header";
import MobileHeader from "./MobileHeader";
import StartSeite from "./StartSeite";

function Homepage() {
  return (
    <>
      <main className="mx-12 z-10 mt-20">
        <Header />
        <MobileHeader />
        <StartSeite />
      </main>
    </>
  );
}

export default Homepage;
