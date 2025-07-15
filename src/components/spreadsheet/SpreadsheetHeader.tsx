import { useState, type FC } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const SpreadsheetHeader: FC = () => {
  const [search, setSearch] = useState('');

  const handleSearchSubmit = () => {
    console.log(`Search submitted: ${search}`);
  };

  return (
    <div className="flex justify-between items-center mb-4 bg-white p-2 rounded border border-[#E8ECEF]">
      <div className="flex space-x-2">
        <Button onClick={() => console.log('New button clicked')} variant="primary">
          New
        </Button>
        <Button onClick={() => console.log('Share button clicked')} variant="secondary">
          Share
        </Button>
        <Button onClick={() => console.log('Export button clicked')} variant="secondary">
          Export
        </Button>
      </div>
      <Input
        value={search}
        onChange={setSearch}
        onSubmit={handleSearchSubmit}
        placeholder="Search"
      />
    </div>
  );
};