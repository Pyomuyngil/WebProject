import React, { Component } from 'react';

class BoardItem extends Component {

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }

    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdid}</td>
                <td className="right aligned">{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

export default BoardItem;
