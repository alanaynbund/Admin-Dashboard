import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {data} from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart data={data} title="Sales Analytics" grid dataKey="sales"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}
