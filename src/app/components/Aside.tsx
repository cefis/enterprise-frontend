'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { BookOpenCheck, GraduationCap, LogOut, User2 } from 'lucide-react'
import { useContext } from 'react'
// import { AuthContext } from '@/context/AuthContext'

// interface LinkProps {
//  href: string
//  props: HTMLAttributes<HTMLAnchorElement>
// }

const Link = ({ href, ...props }: any) => {
  const router = usePathname()
  const isActive = router === href

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className="NavigationMenuLink flex w-full gap-2 rounded-sm px-2 data-[active]:border-l-4 data-[active]:border-l-purple-100 data-[active]:text-gray-100"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export default function Aside() {
  //  const { user } = useContext(AuthContext)
  //  console.log(user)

  return (
    <div className="px-24 py-10">
      <div className="flex h-[800px] max-h-[988px] max-w-[242px] flex-col justify-between rounded-xl bg-gradient-to-t from-gray-600 via-gray-700 to-gray-700 px-14 py-10">
        <div className="flex flex-col items-center gap-2 text-2xl font-bold">
          <div className="flex gap-2 text-gray-100">
            <h1>CEFIS</h1>
            <div className="rounded-full border-4 border-gray-100 p-1">
              <BookOpenCheck className="h-5 w-5 text-gray-100" />
            </div>
          </div>
          <NavigationMenu.Root className="mt-5">
            <NavigationMenu.List>
              <NavigationMenu.Item className="mt-6 text-gray-400">
                <Link href="/classroom">
                  <GraduationCap />
                  <h1 className="text-base">Cursos</h1>
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="mt-6 text-gray-400">
                <Link href="/">
                  <User2 />
                  <h1 className="text-base">Perfil</h1>
                </Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
        <div>
          <a href={'/'} className="flex items-center">
            <h1 className=" text-base text-gray-200">Logout</h1>
            <LogOut className="ml-3 text-green-100" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
