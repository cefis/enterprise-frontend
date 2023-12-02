import * as Dialog from '@radix-ui/react-dialog'
import { GraduationCap, Hourglass, X } from 'lucide-react'
import Questions from './Questions'
import Answers from './Answers'

export default function ClassesModal() {
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay forceMount className="fixed inset-0 z-20 bg-black/50">
          <Dialog.Content className="fixed bottom-0 right-0 top-0 z-50 flex max-w-3xl flex-col overflow-auto bg-gray-800 p-12">
            <Dialog.Title className="mt-4 flex items-center gap-4 rounded-2xl border-b border-gray-600 bg-gray-700 p-6 text-2xl">
              <div className="flex justify-between gap-6">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-600 text-3xl font-bold text-gray-900">
                  P
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-gray-100">Programação Avançada</h1>
                  <h1 className="flex items-center gap-2 text-base text-gray-400">
                    <GraduationCap
                      width={18}
                      height={18}
                      className="text-green-100"
                    />
                    Anderson Tucunduva
                  </h1>
                  <h1 className="flex items-center gap-2 text-base text-gray-400">
                    <Hourglass
                      width={15}
                      height={15}
                      className="text-green-100"
                    />
                    60 horas
                  </h1>
                </div>
              </div>
            </Dialog.Title>
            <Dialog.Close className="absolute right-4 top-4 cursor-pointer border-0 bg-transparent text-gray-300">
              <X size={24} />
            </Dialog.Close>
            <Questions />
            <Answers />
            <Answers />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </div>
  )
}
