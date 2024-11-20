import { Language } from "../types";

interface LanguageButtonProps {
  code: string;
  isSelected: boolean;
  onClick: () => void;
}

function GradientBorderButton({
  children,
  isSelected,
  onClick,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`
        relative
        w-8 h-8
        rounded-full
        transition-all duration-300 ease-in-out
        ${isSelected ? "border-transparent" : "border-2 border-[#EBEAED]"}
        text-gray-800
        overflow-hidden
        flex items-center justify-center
        lg:px-6
        px-2
      `}
      onClick={onClick}
    >
      <span className="relative z-10 text-sm font-semibold">{children}</span>
      <span
        className={`
          absolute inset-0 
          rounded-full 
          transition-opacity duration-300 ease-in-out
          bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F]
          ${isSelected ? "opacity-100" : "opacity-0"}
        `}
      />
      <span
        className={`
          absolute inset-[2px]
          rounded-full 
          bg-white
          transition-all duration-300 ease-in-out
          ${isSelected ? "opacity-100" : "opacity-0"}
        `}
      />
    </button>
  );
}

function LanguageButton({ code, isSelected, onClick }: LanguageButtonProps) {
  return (
    <GradientBorderButton isSelected={isSelected} onClick={onClick}>
      {code}
    </GradientBorderButton>
  );
}

export function LanguageSelector({
  className,
  selectedLanguage,
  onLanguageChange,
}: {
  className?: string;
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const languages: Array<Language> = ["es", "en", "de"];

  return (
    <div
      className={`flex space-x-2 justify-items-end items-center ${className}`}
    >
      {languages.map((lang) => (
        <LanguageButton
          key={lang}
          code={lang.toUpperCase()}
          isSelected={selectedLanguage === lang}
          onClick={() => onLanguageChange(lang)}
        />
      ))}
    </div>
  );
}
