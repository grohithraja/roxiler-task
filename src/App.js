import { Component } from "react";
import Table from "./components/Table/Table";
import "./App.css";

class App extends Component {
  state = {data: []}

  componentDidMount() {
    this.fechedData()
  }

  fechedData = async () => {
    const options = {
      method: "GET",
      mode: "cors"
    };
  
    const response = await fetch(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json",
      options
    );
  
    const fetchedData = await response.json();
    console.log(fetchedData)

    this.setState({data: fetchedData})

  }

  render() {
    const {data} = this.state
    return (
      <div className="App">
        <div>
          <h1>Transaction Board</h1>
        </div>
        <form>
          <table className="tb1">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
            <div>
              {data.map((eachItem) => {
                return <Table eachData={eachItem} />;
              })}
            </div>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
