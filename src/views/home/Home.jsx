import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {data} from "../../dummyData"

export default function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart data={data} title="Sales Analytics" grid dataKey="sales"/>
    </div>
  )
}
