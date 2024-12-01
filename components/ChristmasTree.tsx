import React from 'react'

interface ChristmasTreeProps {
  className?: string
}

const ChristmasTree: React.FC<ChristmasTreeProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L10 90H90L50 10Z" fill="#165B33"/>
      <rect x="45" y="90" width="10" height="10" fill="#8B4513"/>
      <circle cx="30" cy="50" r="5" fill="#C41E3A"/>
      <circle cx="70" cy="60" r="5" fill="#FFD700"/>
      <circle cx="50" cy="40" r="5" fill="#1E90FF"/>
      <circle cx="40" cy="70" r="5" fill="#FF69B4"/>
    </svg>
  )
}

export default ChristmasTree

