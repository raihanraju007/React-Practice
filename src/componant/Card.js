const todoTitle = "Call Family";
const description = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
const date = new Date();
const cdate = date.getDate();
const cmonth = date.getMonth();
const cyear = date.getFullYear();

function Card(){
    return     <div>
      <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDesc">{description}</p>
        <p className="cardFooter">{cdate + "/" + cmonth + "/" + cyear}</p>
      </div>
  </div>
}
export default Card;