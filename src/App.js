import { useState } from "react";
import "./App.css";
import Login from "./components/login";

function App() {
  const [completeRequest, setCompleteRequest] = useState(false);
  const [failedRequest, setFailedRequest] = useState(false);

  return (
    <div className="App">
      <Login
        setCompleteRequest={setCompleteRequest}
        setFailedRequest={setFailedRequest}
      />
      {completeRequest && <p className="complete"> Requisição completa! </p>}
      {failedRequest && <p className="failed"> Requisição falhou! </p>}
    </div>
  );
}

export default App;
