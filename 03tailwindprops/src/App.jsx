import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-md mb-4">test</h1>
      <Card username='Habib' btnTxt='Habib' />
      <Card username='Imran' btnTxt='Imran' />
      <Card username='Tanvir' btnTxt='Tanvir' />
    </>
  );
}

export default App;
