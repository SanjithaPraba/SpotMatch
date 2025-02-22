"use client"

import React from "react"

import { useState, Input, Card, CardContent, CardHeader, CardTitle, Button} from "react"
import { MapPin, Search } from "lucide-react"

export default function SpotMatch() {
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [radius, setRadius] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch(`/api/search?description=${description}&location=${location}&radius=${radius}`)
    const data = await response.json()
    setResults(data.results.slice(0, 5))
  }

  return (
    <div className="min-h-screen bg-sky-50">
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-8">SpotMatch</h1>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-sky-700">Find Your Perfect Spot</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Description (e.g., coffee shop, park)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Location (e.g., New York, NY)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Radius (in miles)"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </form>
          </CardContent>
        </Card>

        {results.length > 0 && (
          <Card className="w-full max-w-2xl mx-auto mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-sky-700">Top 5 Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {results.map((result: any, index: number) => (
                  <li key={index} className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-sky-700">{result.name}</h3>
                      <p className="text-sm text-gray-600">{result.vicinity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}

