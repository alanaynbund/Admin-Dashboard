import React from 'react'
import "./featuredInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyC">
            <span className="featuredMoney">$2,000</span>
            <span className="featuredMoneyRate">
                -12.5
                <FontAwesomeIcon icon={faArrowDown} className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Comapred to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyC">
            <span className="featuredMoney">$5,000</span>
            <span className="featuredMoneyRate">
                -12.5
                <FontAwesomeIcon icon={faArrowDown} className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Comapred to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyC">
            <span className="featuredMoney">$5,000</span>
            <span className="featuredMoneyRate">
                +12.5
                <FontAwesomeIcon icon={faArrowUp} className='featuredIcon'/>
            </span>
        </div>
        <span className="featuredSub">Comapred to last month</span>
      </div>
    </div>
  )
}
