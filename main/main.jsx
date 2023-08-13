

const Main = ({children}) => {
  const onRouteChange = (route) => {
    setCurrentComponent(route)
  }
  const [currentComponent, setCurrentComponent] = React.useState(current_route)
  React.useEffect(()=>{
    subscribe(onRouteChange)
  },[])
  // observers.push(setCurrentComponent)
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center" onClick={()=> setCurrentComponent(currentComponent + 'dang ')}>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-white text-center text-lg">
          {!currentComponent ? <p>Welcome to the Main Page</p> : currentComponent}
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
