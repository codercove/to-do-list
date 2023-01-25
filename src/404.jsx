import gif from "./assets/xw.gif";
const ErrorPage = () => {
  return (
    <div id="App">
      <div className="error-container">
        <img src={gif} alt="Error-Image" id="error-image" />
        <h2>404</h2>
        <h4>Page not found</h4>
        <button
          onClick={() => {
            location.href = "/";
          }}
        >
          Return to homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
