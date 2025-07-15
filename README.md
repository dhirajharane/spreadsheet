# 📊 Spreadsheet Prototype

A pixel-perfect front-end-only React prototype that replicates a **Google Sheets-like** spreadsheet experience. Built using **React 18**, **TypeScript**, **Tailwind CSS**, and **@tanstack/react-table**, this project closely follows the Figma design and emphasizes clean, modular code.

## 🚀 Features

- **Pixel-Close UI**: Matches the provided Figma design exactly — layout, typography, spacing, and colors.  
- **Editable Spreadsheet Grid**: A 20x10 grid with double-click-to-edit cells, powered by `@tanstack/react-table`.  
- **Interactive UI Components**: All buttons (New, Share, Export, etc.), tabs (Sheet 1, Sheet 2, Sheet 3), and search input log to console.  
- **Fully Responsive Layout**: Includes top header, vertical sidebar with icons, and spreadsheet tabs.  
- **Strict Code Quality**: Built with TypeScript in strict mode, formatted with Prettier, and linted using ESLint.

## 🛠️ Tech Stack

- React 18  
- Vite  
- TypeScript (strict mode)  
- Tailwind CSS  
- @tanstack/react-table  
- ESLint + Prettier

## ⚙️ Setup

```bash
git clone <repository-url>
cd spreadsheet-prototype
npm install
npx tailwindcss init -p
npm install -D @tanstack/react-table eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-react tailwindcss postcss autoprefixer
npm run dev
npm run build
npm run lint
npm run type-check
```

## 📁 Project Structure

```
spreadsheet-prototype/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── spreadsheet/
│   │   │   ├── Spreadsheet.tsx
│   │   │   ├── SpreadsheetHeader.tsx
│   │   │   ├── SpreadsheetGrid.tsx
│   │   │   └── SpreadsheetCell.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── spreadsheetUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── package.json
└── README.md
```

## 💡 Trade-offs

- **State Management**: Local state was used to avoid unnecessary libraries and keep things light.
- **Stretch Goals**: Features like keyboard navigation and column resizing were skipped to focus on pixel-perfect design. Codebase is prepared to support them later.
- **Styling Choices**: Tailwind CSS was used for fast, precise design implementation. Used Figma-provided hex codes like `#0066FF`, `#F5F6F5`, and `#E8ECEF`.
- **Grid Logic**: Used `@tanstack/react-table` to build a reliable and editable grid mimicking spreadsheet behavior.

## 🧾 Git Commit History

Examples of clear commit messages:
- `Initial project setup with Vite, React, TypeScript, and Tailwind`
- `Implement pixel-perfect header and sidebar`
- `Add spreadsheet grid with editable cells`
- `Style buttons and tabs per Figma design`



## 📝 Notes

- Passes `npm run lint` and `npm run type-check`  
- All buttons, tabs, search, and cell edits log to console  
- Codebase is modular, readable, and future-ready

## ❓ Getting Help

For issues or suggestions, contact the repository maintainer or open an issue.

Happy coding! 🐙
