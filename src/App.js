import {Component} from 'react'
import Table from './components/Table/Table'
import './App.css'

class App extends Component{

  const apiUrl = 'https://apis.ccbp.in/prime-deals'
  const options = {
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  
  const fetchedData = await response.json()

  render() {
      
    return (
      <div className='App'> 
        <form>
          <table className='tb1'>
            <tr>
              <th>
                ID
              </th>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
              <th>
                Price
              </th>
              <th>
                Category
              </th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
            <div>
              {fetchedData.map((eachItem) => {
                return (<Table eachData={eachItem}/>)
              })}
            </div>
          </table>
        </form>
      </div>
    )
  }
}

export default App;
