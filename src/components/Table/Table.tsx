import React from 'react';
import { IPingData } from '../../utils/data';

interface TableProps {
  data: IPingData;
}

const Table = (props: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        {/*    <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr> */}
        {/*      <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr> */}
        {/*       <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr> */}
        {/*     <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr> */}
        {/*      <tr>
          <td>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </td>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
