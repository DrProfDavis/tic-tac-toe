const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
    
    const handleClick = (e) => {
        if (e.target.className === 'circle') return
        if (e.target.className === 'cross') return
        const taken = e.target.firstChild.classList.contains("circle") ||
        e.target.firstChild.classList.contains("cross")

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
            }
            if (go === "cross") {
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }

    // We are getting the array. For each one of the indexes, if the index matches whatever ID we are in, we are going to replace the cell (which starts as an empty string) with the className of 'cross' or 'circle'
    const handleCellChange = (className) => {
        // creates a new array using the original cells array, map for each cell that exists and get its index
        const nextCells = cells.map((cell, index) => {
            // if the index equals the id of the cell we pass through, then return the className
            if (index === id) {
                return className
            // else we return whatever the cell was originally
            } else {
                return cell
            }
        })
        // updates new array with position of newly created cross or circle
        setCells(nextCells)
    }

    return (
        <div className='square' id={id} onClick={!winningMessage ? handleClick: undefined}>
            <div className={cell}></div>
        </div>
    )
}
export default Cell