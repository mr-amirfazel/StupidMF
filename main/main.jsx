

const Main = ({children}) => {
  const onRouteChange = (route) => {
    setCurrentRoute(route)
  }
  const [currentRoute, setCurrentRoute] = React.useState(current_route)
  const [currentComponent, setCurrentComponent] = React.useState(current_route)
  subscribe(onRouteChange)

  React.useEffect(()=> {
    setCurrentComponent(currentRoute)
  }, [currentRoute])





  return (
    <div className="bg-gray-900 h-[87vh] flex justify-center items-center" >
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-white text-center text-lg">
          {!currentComponent ? <p>This is a stupid website</p> : currentComponent}
        </p>
      </div>
    </div>
  );
};


const Home = () => {
  return <h1>Home</h1>;
};

const AboutComponent = () => {
  return <h1>About</h1>;
};

const ContactComponent = () => {
  return <h1>Contact</h1>;

};


ReactDOM.render(
  <Main>
  </Main>,
  document.getElementById("main")
);

// });
