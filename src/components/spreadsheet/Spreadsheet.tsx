import type {FC} from 'react';
import { useState } from 'react';
import { SpreadsheetHeader } from './SpreadsheetHeader';
import { SpreadsheetGrid } from './SpreadsheetGrid';
import type { CellData } from '../../types';

export const Spreadsheet: FC = () => {
  const [data, setData] = useState<CellData[][]>(
    Array(20).fill(null).map(() => Array(10).fill({ value: '' }))
  );
  const [activeTab, setActiveTab] = useState('Sheet 1');

  const updateCell = (row: number, col: number, value: string) => {
    const newData = [...data];
    newData[row][col] = { value };
    setData(newData);
    console.log(`Cell (${row}, ${col}) updated to: ${value}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switched to tab: ${tab}`);
  };

  return (
    <div className="flex-1 p-4 bg-[#F5F6F5] flex flex-col">
      <SpreadsheetHeader />
      <div className="flex space-x-2 mb-2">
        {['Sheet 1', 'Sheet 2', 'Sheet 3'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 rounded-t-md ${
              activeTab === tab
                ? 'bg-white border-t border-l border-r border-[#E8ECEF]'
                : 'bg-[#E8ECEF] text-[#6B7280]'
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <SpreadsheetGrid data={data} updateCell={updateCell} />
    </div>
  );
}