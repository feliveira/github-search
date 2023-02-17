import "../../public/global.css"
import { Poppins } from "@next/font/google"


const poppins = Poppins({weight: ["400","700", "800"], subsets: ["latin"] })

export const metadata = {
  title: {
    default: 'Github',
    template: '%s | Github',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
