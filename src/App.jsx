import { useState } from "react";
import { Hello } from "./components/Hello";
function App() {
  // inicializei um estado com o valor inicial false
  // descontruição de array
  const [userState, setUserState] = useState(false);
  // Neste momento, usertState é false
  setTimeout(function() {
    setUserState(true);
  }, 5000);
  return <Hello isLogged={userState} username="Aldacir" />;
}
export default App
