import React, { Component } from 'react'
import Board from './component /Board/Board'
import Card from './component /Card/Card'
import './App.css';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cardArray: [],
      cardArray1: []
    }
  }

  handleChange = (e, i) => {
    let cardArray = [...this.state.cardArray]
    cardArray[i]["detail"] = e.target.value;
    this.setState({
      ...this.state,
      cardArray: cardArray
    })
  }

  handleChange1 = (e, i) => {
    let cardArray1 = [...this.state.cardArray1]
    cardArray1[i]["detail"] = e.target.value;
    this.setState({
      ...this.state,
      cardArray1: cardArray1
    })
  }

  handleAddCard = () => {
    let cardArray = [...this.state.cardArray]
    if (!this.state.cardArray.length) {
      let id = 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      cardArray.push(obj)
      this.setState({
        ...this.state,
        cardArray: cardArray,
      })
    } else if (this.state.cardArray.length) {
      let id = cardArray[cardArray.length - 1]["id"] + 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      if (cardArray[cardArray.length - 1]["detail"].length) {
        cardArray.push(obj)
      } else {
        alert("ADD Description")
      }
      this.setState({
        ...this.state,
        cardArray: cardArray,
      })
    }
    else {
      alert("ADD Description")
    }
  }


  handleAddCard1 = () => {
    let cardArray1 = [...this.state.cardArray1]
    if (!this.state.cardArray1.length) {
      let id = 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      cardArray1.push(obj)
      this.setState({
        ...this.state,
        cardArray1: cardArray1,
      })
    } else if (this.state.cardArray1.length) {
      let id = cardArray1[cardArray1.length - 1]["id"] + 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      if (cardArray1[cardArray1.length - 1]["detail"].length) {
        cardArray1.push(obj)
      } else {
        alert("ADD Description")
      }
      this.setState({
        ...this.state,
        cardArray1: cardArray1,
      })
    }
    else {
      alert("ADD Description")
    }
  }

  render() {
    return (
      <>
        <div className="trelloHeader">Trello</div>
        <div className="flexbox">
          <Board id="board-1" className='board'>
            <button onClick={this.handleAddCard} className="addBtn">+ Add another card</button><br />
            {(this.state.cardArray.length) ?
              this.state.cardArray.map((detail, i) =>
                <Card id={detail.id} className="card" draggable="true" key={detail.id}>
                  <input onChange={(e) => this.handleChange(e, i)} style={{ border: "none" }} />
                </Card>
              )
              : null
            }
          </Board>

          <Board id="board-2" className='board'>
            <button onClick={this.handleAddCard1} className="addBtn">+ Add another card</button><br />
            {(this.state.cardArray1.length) ?
              this.state.cardArray1.map((detail, i) =>
                <Card id={detail.id} className="card" draggable="true" key={detail.id}>
                  <input onChange={(e) => this.handleChange1(e, i)} style={{ border: "none" }} />
                </Card>
              )
              : null
            }
          </Board>
        </div>
        <div className="trelloHeader">©AnujBagerwal</div>

      </>
    )
  }
}