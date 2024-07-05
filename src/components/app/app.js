import React from 'react';
 
import Table from '../table';
import "./app.css"
import Guess from '../guess';
import Instruction from '../instructions';


// import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends React.Component {

   state = {
      tableMod: false,
      instructionMod: false,
   }

   tableMod = () => {
      const {tableMod} = this.state
      if (tableMod)
      {this.setState({tableMod: false})}
      else {
      this.setState({tableMod: true,instructionMod: false,})
      }
   }

   instructionMod = () => {
      const {instructionMod} = this.state
      if (instructionMod)
      {this.setState({instructionMod: false})}
      else {
      this.setState({instructionMod: true,tableMod: false})
      }
   }


   render() {
      const { tableMod, instructionMod } = this.state
      let content
      if (tableMod === false && instructionMod === false) {
         content = <Guess className="guess-card" />
      } else if (tableMod === true) {
         content = <Table />
      } else if (instructionMod === true) {
         content = <Instruction />
      }

      return (
     
         <div className='app'>
          <div className="tablemodButton" onClick={this.tableMod} style={{ backgroundColor: (tableMod) ? "rgb(123, 92, 12)" : "goldenrod" }}> А ა </div>
          <div className="instructionMod" onClick={this.instructionMod} style={{ backgroundColor: (instructionMod) ? "rgb(123, 92, 12)" : "goldenrod" }}> ? </div>
          {content}
         </div>
      )
   }
}
