import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Lewis Halstead",
    location: "Glasgow, Scotland",
    email: "lewishalstead5@gmail.com",
    availability: "Open for work",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
