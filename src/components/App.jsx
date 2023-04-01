
import './App.css';
import { NavBar } from './NavBar/NavBar.jsx';
import { GreetingContainer } from './GreetingContainer/GreetingContainer.jsx';

export const App =() => {
  return (
    <div>
      <NavBar/>
      <GreetingContainer message= 'Welcome! Our Web Site is in construction'/>
    </div>
  );
}


