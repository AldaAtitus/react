import { useState, useEffect } from "react";
import { Hello } from "./components/Hello";
function App() {
  useEffect(() => {
    console.log("O componente foi atualizado", userState);
  });
  useEffect(() => {
    console.log("O componente foi montado");
  }, []);
  
  // inicializei um estado com o valor inicial false
  // descontruição de array
  const [userState, setUserState] = useState(false);
  // Neste momento, usertState é false
  // Como fazer funcionar ?
  /*
  setTimeout(function() {
    setUserState(true);
  }, 5000);
  */
  return <Hello isLogged={userState} username="Aldacir" setUserState={setUserState} />;
}
export default App
