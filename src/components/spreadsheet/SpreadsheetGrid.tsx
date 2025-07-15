import { type FC, useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import type { CellData } from '../../types';
import { SpreadsheetCell } from './SpreadsheetCell';

interface SpreadsheetGridProps {
  data: CellData[][];
  updateCell: (row: number, col: number, value: string) => void;
}

export const SpreadsheetGrid: FC<SpreadsheetGridProps> = ({ data, updateCell }) => {
  // Since tableData is Record<string, string>[], we must match column type
  const columns: ColumnDef<Record<string, string>>[] = useMemo(
    () =>
      Array(10)
        .fill(null)
        .map((_, index) => ({
          accessorKey: `col${index}`,
          header: String.fromCharCode(65 + index), // A-J
          cell: ({ row }) => (
            <SpreadsheetCell
              value={data[row.index][index].value}
              onChange={(value) => updateCell(row.index, index, value)}
            />
          ),
        })),
    [data, updateCell]
  );

  // Convert CellData[][] to Record<string, string>[]
  const tableData = useMemo(
    () =>
      data.map((row) =>
        row.reduce((acc, cell, colIndex) => {
          acc[`col${colIndex}`] = cell.value;
          return acc;
        }, {} as Record<string, string>)
      ),
    [data]
  );

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border border-[#E8ECEF] rounded bg-white overflow-auto">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className="border-b border-r border-[#E8ECEF] bg-[#F5F6F5] w-12 text-center font-medium text-[#1A1D1F] py-2">
                #
              </th>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-r border-[#E8ECEF] bg-[#F5F6F5] text-center font-medium text-[#1A1D1F] py-2"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              <td className="border-b border-r border-[#E8ECEF] bg-[#F5F6F5] w-12 text-center font-medium text-[#1A1D1F] py-2">
                {parseInt(row.id) + 1}
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-b border-r border-[#E8ECEF] p-0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};