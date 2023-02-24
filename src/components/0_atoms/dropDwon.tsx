import { useState } from 'react';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  onChange: (value: string) => void;
};

const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center px-1 pr-[8px] py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-[24px] w-[24px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
         <path d="M10 16h4a1 1 0 0 1 .12 2H10a1 1 0 0 1-.12-2H14h-4Zm-2-5h8a1 1 0 0 1 .12 2H8a1 1 0 0 1-.12-2H16 8ZM5 6h14a1 1 0 0 1 .12 2H5a1 1 0 0 1-.12-2H19 5Z" fill="currentColor"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[9rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option.value}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const options: DropdownOption[] = [
  { label: 'Clear Completed', value: 'clear_completed' },
  { label: 'Check All', value: 'check_all' },
  { label: 'Uncheck All', value: 'uncheck_all' },
];

const DropDown = () => {
  const handleOptionChange = (value: string) => {
    console.log(`Selected option: ${value}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Dropdown options={options} onChange={handleOptionChange} />
    </div>
  );
};

export default DropDown;
