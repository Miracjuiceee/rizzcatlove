import "./App.css";
import Hero from "./components/Hero";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Hero />
      <Link />
      <p id='creator'>
        Website created by{" "}
        <a href='https://x.com/CreativGuyMirac'>@CreativGuyMirac</a>
      </p>
      <p id='Copyright'>© 2024 $RIZZ - All Rights Reserved</p>
    </>
  );
}

export default App;
