import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// material-ui
import {
    TextField,
} from '@material-ui/core/'


// 商品の選択肢
const selectShohins = [
    {id: 10, name: '産地〆マダイ養殖', tanka: 100},
    {id: 20, name: 'アトランティクサーモン養殖', tanka: 200},
    {id: 30, name: '活アサリ', tanka: 300},
    {id: 40, name: 'カンパチフィレ', tanka: 400},
]

// スタイル
// 背景色を白にしないとセルの文字が透ける
const myStyle = {
    backgroundColor: 'white',
}

class ShohinEditor extends Component {

    // コンストラクタ
    constructor(props) {
        super(props)
        this.state = {
            shohin: props.row.shohin,
            tanka: props.row.tanka,
        }
    }
    
    getValue() {
        return {
            shohin: this.state.shohin,
            tanka: this.state.tanka
        }
    }

    getInputNode() {
        // 以下は記述しなくても動く？
        // return ReactDOM.findDOMNode(this).getElementsByTagName("input")[0]
    }

    // 入力値変更時
    handleChange(e) {
        const tanka = selectShohins.filter(item => item.name === e.target.value)[0].tanka
        this.setState({
            shohin: e.target.value,
            tanka: tanka
        })
        // サンプルでは第2引数にthis.props.onCommit()を指定しているが、付加しなくても動く？
        // this.setState({
        //     shohin: e.target.value,
        //     tanka: tanka
        // }, () => this.props.onCommit())
    }

    render() {
        // SelectはNativeのパーツでないと、フォーカスがすぐ外れてしまう？
        return (
            <TextField
                select
                variant="outlined"
                style={myStyle}
                value={this.state.shohin}
                onChange={e => this.handleChange(e)}
                SelectProps={{
                    native: true,
                }}
            >
                {selectShohins.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </TextField>
        )
    }

}

export default ShohinEditor