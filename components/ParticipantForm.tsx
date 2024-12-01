import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ParticipantFormProps {
  numParticipants: number
  onSubmit: (participants: string[]) => void
}

export default function ParticipantForm({ numParticipants, onSubmit }: ParticipantFormProps) {
  const [participants, setParticipants] = useState<string[]>(Array(numParticipants).fill(''))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (participants.every(name => name.trim() !== '')) {
      onSubmit(participants)
    }
  }

  const handleInputChange = (index: number, value: string) => {
    const newParticipants = [...participants]
    newParticipants[index] = value
    setParticipants(newParticipants)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {participants.map((participant, index) => (
        <div key={index}>
          <Label htmlFor={`participant-${index}`}>Participant {index + 1}</Label>
          <Input
            id={`participant-${index}`}
            value={participant}
            onChange={(e) => handleInputChange(index, e.target.value)}
            required
          />
        </div>
      ))}
      <Button type="submit" className="w-full">Generate Assignments</Button>
    </form>
  )
}

