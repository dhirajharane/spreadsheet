import type { FC } from 'react';
import { Button } from '../common/Button';

export const Sidebar: FC = () => {
  return (
    <aside className="w-[72px] bg-white border-r border-[#E8ECEF] py-4 flex flex-col items-center space-y-4">
      <Button
        onClick={() => console.log('Home clicked')}
        variant="secondary"
        className="flex flex-col items-center"
      >
        <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </Button>
      <Button
        onClick={() => console.log('Sheets clicked')}
        variant="secondary"
        className="flex flex-col items-center"
      >
        <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14H6v-4h4v4zm0-6H6V7h4v4zm5 6h-4v-4h4v4zm0-6h-4V7h4v4zm4 6h-4v-4h4v4zm0-6h-4V7h4v4z" />
        </svg>
        <span className="text-xs mt-1">Sheets</span>
      </Button>
      <Button
        onClick={() => console.log('Data clicked')}
        variant="secondary"
        className="flex flex-col items-center"
      >
        <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-8 4v12a10 10 0 008 4 10 10 0 008-4V6a10 10 0 00-8-4zm0 16a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6z" />
        </svg>
        <span className="text-xs mt-1">Data</span>
      </Button>
      <Button
        onClick={() => console.log('Settings clicked')}
        variant="secondary"
        className="flex flex-col items-center"
      >
        <svg className="w-6 h-6" fill="#6B7280" viewBox="0 0 24 24">
          <path d="M19.14 12.94a7.5 7.5 0 00.15-1.94 7.5 7.5 0 00-.15-1.94l-2.07-1.6a.5.5 0 01-.18-.63l1-1.73a.5.5 0 00-.1-.56 7.5 7.5 0 00-2.7-2.7.5.5 0 00-.56-.1l-1.73 1a.5.5 0 01-.63-.18l-1.6-2.07a.5.5 0 00-.5-.15A7.5 7.5 0 0012 4.86a.5.5 0 00-.5.15l-1.6 2.07a.5.5 0 01-.63.18l-1.73-1a.5.5 0 00-.56.1 7.5 7.5 0 00-2.7 2.7.5.5 0 00-.1.56l1 1.73a.5.5 0 01-.18.63l-2.07 1.6a.5.5 0 00-.15.5 7.5 7.5 0 000 3.88.5.5 0 00.15.5l2.07 1.6a.5.5 0 01.18.63l-1 1.73a.5.5 0 00.1.56 7.5 7.5 0 002.7 2.7.5.5 0 00.56.1l1.73-1a.5.5 0 01.63.18l1.6 2.07a.5.5 0 00.5.15 7.5 7.5 0 003.88 0 .5.5 0 00.5-.15l1.6-2.07a.5.5 0 01.63-.18l1.73 1a.5.5 0 00.56-.1 7.5 7.5 0 002.7-2.7.5.5 0 00.1-.56l-1-1.73a.5.5 0 01.18-.63l2.07-1.6a.5.5 0 00.15-.5zM12 16a4 4 0 110-8 4 4 0 010 8z" />
        </svg>
        <span className="text-xs mt-1">Settings</span>
      </Button>
    </aside>
  );
};