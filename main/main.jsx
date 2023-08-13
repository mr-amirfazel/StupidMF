// import header from '../assets/header.PNG'

const Main = () => {
  const [currentRoute, setCurrentRoute] = React.useState(current_route);
  const [currentComponent, setCurrentComponent] = React.useState(null);

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
        ) : currentRoute !== "About" ? (
          <PartialComponentInfo component={components[currentRoute]} />
        ) : currentRoute == "About" ? (
          <p>
            this is the stupidest and easiest way to build a website using the
            micro-frontend methodology using only CDN's for the functionality of
            desired technologies I have used
            <ul className="m-4 flex flex-col justify-center items-center gap-4">
              <li>
                <div className="flex justify-center items-center gap-4">
                <strong>React</strong>
                <img src="../assets/react.png" alt="" />
                </div>
              </li>
              <li>
                <div  className="flex justify-center items-center gap-4">
                <strong>Vue</strong>
                <img src="../assets/vue.png" alt="" />
                </div>
              </li>
              <li>
                <div  className="flex justify-center items-center gap-4">
                <strong>Angular</strong>
                <img src="../assets/angular.png" alt="" />
                </div>
              </li>
            </ul>
            for this project just to run away from creating a shell app and
            making it complex. and show how a micro-frontend app looks like
            <br></br>
            Easy and stupid =))))
          </p>
        ) : (
          <p>This is a stupid website</p>
        )}
      </div>
    </div>
  );
};

const PartialComponentInfo = ({ component }) => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center">
      <span>
        this stupid header is built using <strong>{component.title}</strong>
      </span>
      <img src={component.image} alt={component.title} />
      <RepoInfo />
    </div>
  );
};

const RepoInfo = () => {
  return (
    <p>
      the code for this section is available at the{" "}
      <a
        className="font-bold text-blue-400"
        href="https://github.com/mr-amirfazel/StupidMF"
        target="_blank"
      >
        github repository
      </a>
    </p>
  );
};
ReactDOM.render(<Main></Main>, document.getElementById("main"));
