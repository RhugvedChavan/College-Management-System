'use client'

import React, { useState, useEffect } from 'react'
import { Loader2, Eye, Trash2 } from "lucide-react"
import axios from 'axios'

const AllStudents = () => {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true)
        const response = await axios('http://localhost:3000/api/v1/admin/students', {
          withCredentials: true
        })
        if (response.data.success) {
          setStudents(response.data.students)
        }
        setIsLoading(false)
      } catch (err) {
        setError('An error occurred while fetching students')
        setIsLoading(false)
      }
    }

    fetchStudents()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:3000/api/v1/admin/delete-user/${id}`, {
          withCredentials: true
        })
        setStudents(students.filter(student => student.id !== id))
      } catch (err) {
        setError('An error occurred while deleting the student')
      }
    }
  }

  const handleViewDetails = (id) => {
    console.log(`View details for student with id: ${id}`)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <div>
            <h1 className="text-center text-red-500 text-2xl font-bold">Error</h1>
          </div>
          <div>
            <p className="text-center mt-2">{error}</p>
            <button 
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Students</h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Grade</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{student.fullname}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                  <td className="py-2 px-4 border-b">A Grade</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleViewDetails(student.id)}
                      className="mr-2 text-blue-500 hover:text-blue-600"
                      aria-label="View details"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-500 hover:text-red-600"
                      aria-label="Delete student"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AllStudents