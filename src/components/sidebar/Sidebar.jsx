import { faArrowTrendUp, faBars, faBriefcase, faCircleExclamation, faMoneyBill, faStore, faTimeline } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./sidebar.css"
import { faChartBar, faComments, faEnvelope, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
              <FontAwesomeIcon icon={faBars} className='sidebarIcon'/>
              Home
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faTimeline} className='sidebarIcon'/>
              Analytics
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faArrowTrendUp} className='sidebarIcon'/>
              Sales
              </li>
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faUser} className='sidebarIcon'/>
              Users
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faStore} className='sidebarIcon'/>
              Products
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faMoneyBill} className='sidebarIcon'/>
              Transactions
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faChartBar} className='sidebarIcon'/>
              Reports
              </li>
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faEnvelope} className='sidebarIcon'/>
              Mail
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faComments} className='sidebarIcon'/>
              Feedback
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faMessage} className='sidebarIcon'/>
              Messages
              </li>
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faBriefcase} className='sidebarIcon'/>
              Manage
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faArrowTrendUp} className='sidebarIcon'/>
              Analytics
              </li>
              <li className="sidebarListItem">
              <FontAwesomeIcon icon={faCircleExclamation} className='sidebarIcon'/>
              Reports
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
