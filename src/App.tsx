import Nav from "./Components/Nav";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Technology from "./Pages/Technology";
function App() {
  // simple router + background image
  let Page;
  let image =
    "bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')]";
  switch (window.location.pathname) {
    case "/":
      Page = Home;
      break;
    case "/destination":
      Page = Destination;
      image =
        "bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')]";
      break;
    case "/crew":
      Page = Crew;
      image =
        "bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]";
      break;
    case "/technology":
      Page = Technology;
      image =
        "bg-[url('/technology/background-technology-mobile.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')]";
      break;
    default:
      Page = NotFound;
      break;
  }
  return (
    <div className={`h-screen ${image} bg-cover text-Text flex flex-col lg:overflow-hidden`}>
      <Nav />
      <main className="h-full md:flex md:flex-col md:overflow-hidden">
        <Page />
      </main>
    </div>
  );
}

export default App;
