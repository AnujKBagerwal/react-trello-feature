import React, { Component } from 'react'
import Board from './component /Board/Board'
import Card from './component /Card/Card'
import { Col, Row } from 'react-bootstrap'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tmpName: "",
      boards: []
    }
  }

  addBoards = () => {
    let tmpName = this.state.tmpName;
    if (tmpName.length) {
      let newInput = { id: tmpName, array: [] }
      let boards = [...this.state.boards]
      boards.push(newInput)
      this.setState({
        ...this.state,
        tmpName: "",
        boards: boards
      })
    } else {
      alert("Enter Board Name")
    }
  }

  addCards = (index) => {
    console.log(index)
    let boards = [...this.state.boards];
    let tmpBoard = boards[index].array
    if (!tmpBoard.length) {
      let id = tmpBoard.length + 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      tmpBoard.push(obj)
      this.setState({
        ...this.state,
        boards: boards
      })
    } else {
      let id = tmpBoard.length + 1;
      let obj = {}
      obj.id = id;
      obj.detail = "";
      if (tmpBoard[tmpBoard.length - 1]["detail"].length) {
        tmpBoard.push(obj)
        this.setState({
          ...this.state,
          boards: boards
        })
      } else {
        alert("ADD Description")
      }
    }
  }

  cardDes = (e, i, index) => {
    console.log(e.target.value, i, index)
    let boards = [...this.state.boards]
    let tmpBoard = boards[index].array
    tmpBoard[i].detail = e.target.value
    this.setState({
      ...this.state,
      boards: boards
    })
  }

  render() {
    // console.log("state", this.state)
    return (
      <>
        <div className="trelloHeader">Trello</div>
        <div className="centerThing">
          <input
            type="text"
            style={{ backgroundColor: "white" }}
            onChange={(e) => this.setState({ tmpName: e.target.value })}
            value={this.state.tmpName} /><span>   </span>
          <button onClick={this.addBoards} >Add Boards</button>
        </div>

        <Container-flex>
          <Row >
            {this.state.boards.map((data, index) =>
              <>
                <Col className="colMargin" key={index}>
                  <Board id={index} className='board'>
                    <div className="title">{data.id}</div><br />
                    <div style={{ textAlign: "center" }}>
                      <button
                        onClick={() => this.addCards(index)}
                        className="addBtn">+ Add another card
                      </button><br />
                    </div>
                    {(data.array.length) ?
                      (data.array.map((name, i) =>
                        <Card id={i} className="card" draggable="true" key={i}>
                          <input onChange={(e) => this.cardDes(e, i, index)} />
                        </Card>))
                      : null
                    }
                  </Board>
                </Col>
              </>
            )}
          </Row>
        </Container-flex>

        <div className="trelloHeader footer">©AnujBagerwal</div>
      </>
    )
  }
}