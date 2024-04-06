import '@/app/animate.css';
import '@/app/uk.css';
import '@/app/globals.css';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
