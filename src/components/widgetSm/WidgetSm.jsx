import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./widgetSm.css"
import { faEye } from "@fortawesome/free-regular-svg-icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
    <span className="smTitle">New Members</span>
    <ul className="smList">
      <li className="smListItem">
        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="widgetSmImg" />
        <div className="smUser">
          <span className="smUsername">Jim Ronald</span>
          <span className="smUserTitle">Full Stack Developer</span>
        </div>
        <button className="widgetSmButton">
          <FontAwesomeIcon icon={faEye} className="smIcon"/>
          Display
        </button>
      </li>
      <li className="smListItem">
        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="widgetSmImg" />
        <div className="smUser">
          <span className="smUsername">Jim Ronald</span>
          <span className="smUserTitle">Full Stack Developer</span>
        </div>
        <button className="widgetSmButton">
          <FontAwesomeIcon icon={faEye} className="smIcon"/>
          Display
        </button>
      </li>
      <li className="smListItem">
        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="widgetSmImg" />
        <div className="smUser">
          <span className="smUsername">Jim Ronald</span>
          <span className="smUserTitle">Full Stack Developer</span>
        </div>
        <button className="widgetSmButton">
          <FontAwesomeIcon icon={faEye} className="smIcon"/>
          Display
        </button>
      </li>
      <li className="smListItem">
        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="widgetSmImg" />
        <div className="smUser">
          <span className="smUsername">Jim Ronald</span>
          <span className="smUserTitle">Full Stack Developer</span>
        </div>
        <button className="widgetSmButton">
          <FontAwesomeIcon icon={faEye} className="smIcon"/>
          Display
        </button>
      </li>
      <li className="smListItem">
        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" className="widgetSmImg" />
        <div className="smUser">
          <span className="smUsername">Jim Ronald</span>
          <span className="smUserTitle">Full Stack Developer</span>
        </div>
        <button className="widgetSmButton">
          <FontAwesomeIcon icon={faEye} className="smIcon"/>
          Display
        </button>
      </li>
    </ul>
    </div>
  )
}
