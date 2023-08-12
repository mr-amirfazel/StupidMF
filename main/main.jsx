
const Main = ()=>{
    return (
        <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-white text-center text-lg">Welcome to the Main Page</p>
      </div>
    </div>
    )
 }
   
 ReactDOM.render(<Main />, document.querySelector('#main'));