import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ResultsProps {
  assignments: [string, string][]
}

export default function Results({ assignments }: ResultsProps) {
  const [selectedGiver, setSelectedGiver] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Secret Santa Assignments</h2>
      <p>Click on a name to reveal who they're giving a gift to:</p>
      <div className="grid grid-cols-2 gap-4">
        {assignments.map(([giver, receiver]) => (
          <Button
            key={giver}
            onClick={() => setSelectedGiver(giver)}
            variant={selectedGiver === giver ? "secondary" : "default"}
            className="w-full"
          >
            {giver} {selectedGiver === giver && `→ ${receiver}`}
          </Button>
        ))}
      </div>
    </div>
  )
}

