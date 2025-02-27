"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface DropdownProps {
  title: string
  children: React.ReactNode
  level?: number
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const paddingLeft = `${level * 1}rem`

  return (
    <div className="my-4 border-l-2 border-gray-200 pl-4 font-sans">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full text-left font-medium hover:text-primary transition-colors focus:outline-none"
        style={{ paddingLeft }}
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4 mr-2 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
        )}
        <span className="text-lg">{title}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ paddingLeft: `calc(${paddingLeft} + 1.5rem)` }}
      >
        <div className="pt-2 pb-1">{children}</div>
      </div>
    </div>
  )
}
