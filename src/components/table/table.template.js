const CODES = {
    A: 65,
    Z: 90
}

/* function toCell(_, col) {
    return `
        <div class="table__row-cell"contenteditable data-col="${col}"></div>
    `
} */

function toCell(row) {
    return function(_, col) {
        return `
            <div class="table__row-cell" contenteditable data-col="${col}" data-id="${row}:${col}" data-type="cell"></div>
        `
    }
}

function createCol(col, index) {
    return `
        <div class="table__row-column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
        <div class="table__row" data-type="resizable">
            <div class="table__row-info">
                ${index ? index : ''}
                ${resize}
            </div>
            <div class="table__row-data">${content}</div>
        </div>
    `
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map((el, index) => {
            return String.fromCharCode(CODES.A + index)
        })
        .map(createCol)
        .join('')
    rows.push(createRow(null, cols))

    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            /* .map(toCell) */
            .map(toCell(row))
            .join('')
        rows.push(createRow(row+1, cells))
    }

    return rows.join('')
}