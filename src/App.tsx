import { Spreadsheet } from './components/spreadsheet/Spreadsheet';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import './index.css';

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#F5F6F5]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Spreadsheet />
      </div>
    </div>
  );
}

export default App;