// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

export default function App() {
  return (
    <div>
      <h1>Let's React</h1>
      <div>
        <img
          src={faker.image.people()}
          style={{ height: '70px', paddingRight: '10px' }}
        />
      </div>
    </div>
  );
}
