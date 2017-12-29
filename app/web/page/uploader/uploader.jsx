import React, {Component} from 'react'
import Header from 'component/header/header.jsx'
import './uploader.css'

export default class Home extends Component {
  componentDidMount() {
    console.log('----Uploader is ok-----')
  }

  render() {
    return <div>
      <Header />
      <div className="main">
        <div className="uploader">
          你二大爷！！！！
        </div>
      </div>
    </div>
  }
}