import '../css/style.css';
const Box =({item}) => {
    return(
      <div className="box-body-val">
       <h2 className="box-body-content">   {item.Technology} </h2>
          </div>
    )
}
export default Box;