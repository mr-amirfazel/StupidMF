// import header from '../assets/header.PNG'


const Main = () => {
  const [currentRoute, setCurrentRoute] = React.useState(current_route);
  const [currentComponent, setCurrentComponent] = React.useState(current_route);

  const components = {
    Vue: {
      image: "../assets/header.PNG",
      title: "Vue JS",
    },
    React: {
      image: "../assets/main.PNG",
      title: "React JS",
    },
    Angular: {
      image: "../assets/footer.PNG",
      title: "Angular JS",
    },
  };

  React.useEffect(() => {
    setCurrentComponent(components[currentRoute]);
  }, [currentRoute]);

  const onRouteChange = (route) => {
    setCurrentRoute(route);
  };

  subscribe(onRouteChange);

  return (
    <div className="bg-gray-900 h-[87vh] flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg text-white text-center w-[80%]">
        {!currentRoute ? (
          <p>This is a stupid website</p>
        ) : (
          <div className="flex flex-col gap-3 p-3 justify-center items-center">
            <span>
              this stupid header is built using <strong>{components[currentRoute].title}</strong>
            </span>
            <img src={components[currentRoute].image} alt="" />
          </div>
        )}
        {currentComponent && <RepoInfo />}
      </div>
    </div>
  );
};

const HeaderInfo = () => {
  return <div className="flex flex-col gap-3 justify-center "></div>;
};

const MainInfo = () => {
  return <h1>react main</h1>;
};

const FooterInfo = () => {
  return <h1>angular footer</h1>;
};

const RepoInfo = () => {
  return <p>the code for this section is available at the github repository</p>;
};
ReactDOM.render(<Main></Main>, document.getElementById("main"));
