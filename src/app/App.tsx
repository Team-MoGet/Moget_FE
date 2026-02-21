import Router from "@/app/routes";
import '@/shared/styles/global.css';

export default function App() {
  localStorage.setItem('gachaTicket', '3')
  return <Router />
}
