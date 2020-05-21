import React, { useState, useCallback } from 'react'
import ShohinEditor from './ShohinEditor'

// react-data-grid
import DataGrid, {
    UpdateActions,
    RowsUpdateEvent,
} from 'react-data-grid'
import 'react-data-grid/dist/react-data-grid.css'
// import { Editors } from 'react-data-grid-addons'

// material-ui
import { Button } from '@material-ui/core/'

// 単価の表示フォーマット
const myTankaFormatter = (props) => {
    // 独自のスタイルを定義することが可能
    // （カンマ区切りとか）
    const tanka = props.row.tanka
    const myStyle = {
        color: 'red',
        textAlign: 'right'
    }
    return <div style={myStyle}>{tanka}</div>
}

// 数量の表示フォーマット
const mySuryoFormatter = (props) => {
    // 独自のスタイルを定義することが可能
    // （カンマ区切りとか）
    const suryo = props.row.suryo
    const myStyle = {
        color: 'blue',
        textAlign: 'right'
    }
    return <div style={myStyle}>{suryo}</div>
}

// 列定義
const columns = [
    { key: 'shohin', name: '商品', resizable: true, editable: true, editor: ShohinEditor },
    { key: 'tanka', name: '単価', resizable: true, editable: true, formatter: myTankaFormatter },
    { key: 'suryo', name: '数量', resizable: true, editable: true, formatter: mySuryoFormatter },
]

// 初期データ
const initialRows = [
    { shohin: '産地〆マダイ養殖', tanka: 100, suryo: '' },
    { shohin: 'アトランティクサーモン養殖', tanka: 200, suryo: '' },
    { shohin: '活アサリ', tanka: 300, suryo: '' },
    { shohin: 'カンパチフィレ', tanka: 400, suryo: '' },
]

// データが空だった時に表示する内容
const EmptyRowsRenderer = () => {
    return <div style={{ textAlign: 'center' }}>データなし</div>
}

const Sample = () => {

    // ステートフック
    const [rows, setRows] = useState(initialRows)
    // const [rows, setRows] = useState([])  // データ無しのテスト用

    // セル更新時
    const handleRowUpdate = useCallback(({ fromRow, toRow, updated, action }: RowsUpdateEvent<Partial<Row>>): void => {
        const newRows = [...rows]
        let start
        let end
    
        if (action === UpdateActions.COPY_PASTE) {
            start = toRow;
            end = toRow;
        } else {
            start = Math.min(fromRow, toRow)
            end = Math.max(fromRow, toRow)
        }
    
        for (let i = start; i <= end; i++) {
            newRows[i] = { ...newRows[i], ...updated }
        }
    
        setRows(newRows)
    }, [rows])

    // 値の表示
    const doShowValue = () => {
        alert(JSON.stringify(rows))
    }

    return (
        <div>
            <DataGrid
                columns={columns}
                rows={rows}
                rowHeight={50}
                emptyRowsRenderer={EmptyRowsRenderer}
                onRowsUpdate={handleRowUpdate}
                enableCellCopyPaste
                enableCellDragAndDrop
            />
            <Button variant="contained" color="primary" onClick={() => doShowValue()}>値の表示</Button>
            <pre>
                {JSON.stringify(rows, null, 2)}
            </pre>
        </div>
    )
}

export default Sample