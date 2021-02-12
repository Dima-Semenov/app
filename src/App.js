import { useEffect, useState } from 'react';
import './App.css';
import { InfoPhone } from './Components/InfoPhone/InfoPhone';
import { PhoneCatalog } from './Components/PhoneCatalog/PhoneCatalog';

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(0);

  useEffect(() => {
    fetch('/api/phones.json')
      .then(response => response.json())
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
          <ul className="phones">
            {
              selectedPhone ? (
                <InfoPhone
                  id={selectedPhone}
                  reset={() => setSelectedPhone(0)}
                />
              ) : (
                <>
                  {phones.map(phone => (
                    <PhoneCatalog
                      key={phone.id}
                      {...phone}
                      select={(id) => {
                        setSelectedPhone(id)
                      }}
                    />
                  ))}
                </>
              )
            }
          </ul>
        </div>
      </div>
</div>
  );
}

export default App;
