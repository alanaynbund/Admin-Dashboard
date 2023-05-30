import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"lgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
    <h3 className="lgTitle">
      Latest Transactions
    </h3>
    <table className="lgTable">
      <tr className="lgTr">
        <th className="lgTh">
          Customer
        </th>
        <th className="lgTh">
          Date
        </th>
        <th className="lgTh">
          Amount
        </th>
        <th className="lgTh">
          Status
        </th>
      </tr>
      <tr className="lgTr">
        <td className="lgUser">
          <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="lgImg" />
          <span className="lgName">Ronald Donald</span>
        </td>
        <td className="lgDate">5 May 2023</td>
        <td className="lgAmount">$122</td>
        <td className="lgStatus">
          <Button type="Approved"/>
        </td>
      </tr>
      <tr className="lgTr">
        <td className="lgUser">
          <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="lgImg" />
          <span className="lgName">Ronald Donald</span>
        </td>
        <td className="lgDate">5 May 2023</td>
        <td className="lgAmount">$122</td>
        <td className="lgStatus">
          <Button type="Declined"/>
        </td>
      </tr>
      <tr className="lgTr">
        <td className="lgUser">
          <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="lgImg" />
          <span className="lgName">Ronald Donald</span>
        </td>
        <td className="lgDate">5 May 2023</td>
        <td className="lgAmount">$122</td>
        <td className="lgStatus">
          <Button type="Pending"/>
        </td>
      </tr>
      <tr className="lgTr">
        <td className="lgUser">
          <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="lgImg" />
          <span className="lgName">Ronald Donald</span>
        </td>
        <td className="lgDate">5 May 2023</td>
        <td className="lgAmount">$122</td>
        <td className="lgStatus">
          <Button type="Approved"/>
        </td>
      </tr>
    </table>
    </div>
  )
}
