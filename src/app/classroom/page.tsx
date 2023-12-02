'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Classes from './components/Classes'
import ClassesModal from './components/ClassesModal'
import Aside from '../components/Aside'
import { GraduationCap, Search } from 'lucide-react'
import { api } from '../lib/axios'
import { useEffect, useState } from 'react'

interface coursesProps {
  id: string
  title: string
  duration: number
  description: string
}

export default function Classroom() {
  const [courses, setCourses] = useState<coursesProps[]>([])

  async function getClasses() {
    const response = await api.get('/courses')
    setCourses(response.data)
  }

  useEffect(() => {
    getClasses()
  }, [])

  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <Aside />
          </div>
          <div className="col-span-6 mr-12 py-16">
            <div className="flex flex-col gap-3">
              <h1 className=" flex items-center text-2xl text-gray-100">
                <GraduationCap
                  className="mr-4 text-green-100"
                  width={32}
                  height={32}
                />
                Cursos
              </h1>
              <div className="mb-6 flex max-w-md items-center rounded border border-gray-500 p-3 shadow-sm">
                <Search className="h-[20] w-[20] text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar Curso"
                  className="flex-1 border-0 bg-transparent text-gray-500 placeholder-gray-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {courses.map((course) => {
                return (
                  <div key={course.id}>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="text-left">
                          <Classes
                            id={course.id}
                            title={course.title}
                            description={course.description}
                            duration={course.duration}
                            avatar={course.title.substring(0, 1)}
                          />
                        </button>
                      </Dialog.Trigger>
                      <ClassesModal />
                    </Dialog.Root>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
