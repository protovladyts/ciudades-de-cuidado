"use client";
import { FaArrowUp } from "react-icons/fa";

export const BackToTopButton = ({
  showBackToTop,
}: {
  showBackToTop: boolean;
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showBackToTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    )
  );
};
