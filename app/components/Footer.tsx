import { Paragraph } from "./Paragraph";

export const Footer = async () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black p-4 text-sm sm:text-base md:text-xl lg:text-3xl">
      <div className="flex flex-row justify-between items-center pb-24 md:pb-0">
        <div className="mb-4 md:mb-0">
        </div>
        <ul className="flex space-x-4">
          <Paragraph>Made with love 💘</Paragraph>
        </ul>
        <div className="mt-4 md:mt-0">
          <Paragraph>&copy; {currentYear} Coni & Lucas. </Paragraph>
        </div>
      </div>
    </footer>
  );
};
