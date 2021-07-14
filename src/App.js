import './App.css';
import cloudy from './assets/images/forest_cloudy.png'
import sunny from './assets/icons/partlysunny@2x.png'

function App() {
  return (
    <div className="App">
      <div id="bg">
        <img src={cloudy} alt="" />
        <div className="top">
          <p style={{fontSize:"50px"}}>18</p>
          <p style={{fontSize:"22px"}}>CLOUDY</p>
        </div>
      </div>
      <div className="main">
        <table>
        <tr>
            <td>16</td>
            <td>18</td>
            <td>23</td>
          </tr>
          <tr>
            <td>min</td>
            <td>Current</td>
            <td>max</td>
          </tr>
        </table>
      </div>
      <div className="table">
        <table>
          <tr>
            <td>Tuesday</td>
            <td><img src={sunny} alt=""/></td>
            <td>20</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td><img src={sunny} alt=""/></td>
            <td>18</td>
          </tr>
          <tr>
            <td>Thurday</td>
            <td><img src={sunny} alt=""/></td>
            <td>17</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
