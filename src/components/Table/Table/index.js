const Table = (props) => {
    const {eachData} = props
    const {id, title, price,description, category,image,sold} eachData
    return <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{description}</td>
    <td>{price}</td>
    <td>{category}</td>
    <td>{sold}</td>

  </tr>
}


export default Table