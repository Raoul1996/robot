import React, {Component} from 'react'
import Header from 'component/header/header.jsx'
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import './records.css'

const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]
export default class Home extends Component {
  componentDidMount() {
  }

  render() {
    return (<div>
      <Header />
      <div className="main">
        <div className="records">
          <h1 className="records-title">测试比赛</h1>
          <ScatterChart width={1000} height={800} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} type="number" name='stature' unit='cm' />
            <YAxis dataKey={'y'} type="number" name='weight' unit='cm' />
            <CartesianGrid />
            <Scatter name='A school' data={this.props.records} fill='#8884d8' />
            <Tooltip cursor={{strokeDasharray: '3 3'}} />
          </ScatterChart>
        </div>
      </div>
    </div>)
  }
}