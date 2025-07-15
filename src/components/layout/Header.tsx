import type { FC } from 'react';
import { Button } from '../common/Button';

export const Header: FC = () => {
  return (
    <header className="bg-white border-b border-[#E8ECEF] px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-semibold text-[#1A1D1F]">Sheet 1</div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <Button onClick={() => console.log('File menu clicked')} variant="secondary">
            File
          </Button>
          <Button onClick={() => console.log('Edit menu clicked')} variant="secondary">
            Edit
          </Button>
          <Button onClick={() => console.log('View menu clicked')} variant="secondary">
            View
          </Button>
          <Button onClick={() => console.log('Insert menu clicked')} variant="secondary">
            Insert
          </Button>
          <Button onClick={() => console.log('Format menu clicked')} variant="secondary">
            Format
          </Button>
          <Button onClick={() => console.log('Data menu clicked')} variant="secondary">
            Data
          </Button>
          <Button onClick={() => console.log('Tools menu clicked')} variant="secondary">
            Tools
          </Button>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#6B7280] flex items-center justify-center text-white text-sm">
          U
        </div>
      </div>
    </header>
  );
};