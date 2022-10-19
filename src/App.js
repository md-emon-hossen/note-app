import NotesWrper from "./component/noteswrper/NotesWrper";
import { DaataProvider } from './context/dataContext';
import { ModulProvider } from "./context/ModulContex";

function App() {
  return (
    <DaataProvider>
      <ModulProvider>
        <NotesWrper />
      </ModulProvider>
    </DaataProvider>
  );
}

export default App;
