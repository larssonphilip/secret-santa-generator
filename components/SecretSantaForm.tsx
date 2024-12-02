'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TreesIcon as ChristmasTree, Gift, ArrowRight } from 'lucide-react'

export default function SecretSantaForm() {
  const [participants, setParticipants] = useState<string[]>(['', ''])
  const [assignments, setAssignments] = useState<[string, string][]>([])

  const handleAddParticipant = () => {
    setParticipants([...participants, ''])
  }

  const handleRemoveParticipant = (index: number) => {
    const newParticipants = participants.filter((_, i) => i !== index)
    setParticipants(newParticipants)
  }

  const handleParticipantChange = (index: number, value: string) => {
    const newParticipants = [...participants]
    newParticipants[index] = value
    setParticipants(newParticipants)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validParticipants = participants.filter(p => p.trim() !== '')
    if (validParticipants.length < 2) {
      alert('Please enter at least 2 participants')
      return
    }

    const shuffled = [...validParticipants].sort(() => Math.random() - 0.5)
    const newAssignments: [string, string][] = validParticipants.map((participant, index) => [
      participant,
      shuffled[(index + 1) % shuffled.length]
    ])
    setAssignments(newAssignments)
  }

  return (
    <Card className="w-full bg-white bg-opacity-90 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-2xl text-green-800">
          <ChristmasTree className="mr-2" />
          Participants
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {participants.map((participant, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Label htmlFor={`participant-${index}`} className="sr-only">
                Participant {index + 1}
              </Label>
              <Input
                id={`participant-${index}`}
                value={participant}
                onChange={(e) => handleParticipantChange(index, e.target.value)}
                placeholder={`Participant ${index + 1}`}
                required
              />
              {participants.length > 2 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveParticipant(index)}
                >
                  &times;
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={handleAddParticipant}
            variant="outline"
            className="w-full"
          >
            Add Participant
          </Button>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
            Generate Assignments
          </Button>
        </form>

        {assignments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
              <Gift className="mr-2" />
              Secret Santa Assignments
            </h2>
            <ul className="space-y-2">
              {assignments.map(([giver, receiver], index) => (
                <li key={index} className="bg-green-100 p-2 rounded-md text-green-800 flex items-center justify-between">
                  <span>{giver}</span>
                  <ArrowRight className="text-red-600 mx-2" />
                  <span>{receiver}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

