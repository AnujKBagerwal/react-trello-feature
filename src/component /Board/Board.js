import React from 'react'

function Board(props) {
    // console.log("boards", props)

    const drop = e => {
        e.preventDefault();
        // console.log("drop", e.target)
        const card_id = e.dataTransfer.getData('card_id');
        // console.log("card_id", card_id)

        const card = document.getElementById(card_id);
        card.style.display = "block";

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Board
