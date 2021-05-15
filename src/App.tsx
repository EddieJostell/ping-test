import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IPingData, pingData } from '../src/utils/data';

/* interface IAppState {
  staticData: IPingData;
} */

function App() {
  //console.log(pingData);

  const [userInfo, setUserInfo] = useState({
    adress: '',
  });

  const mappedData = pingData.map((d: IPingData, key: number) => {
    return (
      <tr key={key}>
        <td>
          <div className="checkbox-container">
            <label>
              <input
                name={d.country}
                type="checkbox"
                onClick={() => checkBoxChecked(d.url)}
              />
            </label>
          </div>
        </td>
        <td>{d.provider} </td>
        <td>{d.regionname}</td>
        <td>{d.city}</td>
        <td>{d.country}</td>
      </tr>
    );
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  const checkBoxChecked = (url: string) => {
    console.log('checkboxChecked', url);
    fetchDynamicInfo(url);
  };

  const fetchDynamicInfo = (countryURL: string) => {
    let fetchData = countryURL + userInfo.adress;
    console.log('fetchD', fetchData);

    fetch(`https://cors-anywhere.herokuapp.com/${fetchData}`, { mode: 'cors' })
      .then((response) => {
        const responseJson = response.json();
        console.log(responseJson);
        return responseJson;
      })
      .then((info) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmit}>
          <div className="abc">
            <div className="top">
              <button>PING</button>
            </div>
            <div>
              <div className="middle">
                <div className="input-container">
                  <label>INSERT IP HERE</label>
                  <input
                    type="text"
                    name="adress"
                    id="adress"
                    placeholder="Insert IP here"
                    required
                    value={userInfo.adress}
                    onChange={(event) =>
                      setUserInfo({ ...userInfo, adress: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="bottom">
                <table>
                  <thead>
                    <tr>
                      <th>Checkbox</th>
                      <th>Provider</th>
                      <th>Region Name</th>
                      <th>City</th>
                      <th>Country</th>
                      <th>Resolved IP</th>
                      <th>Min Ping</th>
                      <th>Max Ping</th>
                      <th>Avg Ping</th>
                      <th>Packet Loss (%)</th>
                    </tr>
                  </thead>
                  <tbody>{mappedData}</tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
