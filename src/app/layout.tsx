import Styles from "./layout.module.css";
import Posts from "./posts";
import { Sidebar } from "./components/client/client";
import './globals.css';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

interface Post {
  id: number;
  title: string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <main className={Styles.main}>
          <nav className={Styles.nav}>
            <h3>Türk Viktor</h3>
            <Sidebar />
          </nav>

          <Posts />

          <div className={Styles.markdown}>{children}</div>
        </main>
      </body>
    </html>
  );
}
