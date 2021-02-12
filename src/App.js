import { useEffect, useState } from 'react';
import './App.css';
import { getPhones } from './Components/api/api';
import { InfoPhone } from './Components/InfoPhone/InfoPhone';
import { PhoneCatalog } from './Components/PhoneCatalog/PhoneCatalog';

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(0);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <section>
            <p>
              Search:
              <input type="text" />
            </p>

            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
          </section>
        </div>

        <div className="col-md-10">
          {
            selectedPhone ? (
              <InfoPhone
                id={selectedPhone}
                reset={() => setSelectedPhone(0)}
              />
            ) : (
              <PhoneCatalog
                phones={phones}
                select={(id) => {
                  setSelectedPhone(id)
                }}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
