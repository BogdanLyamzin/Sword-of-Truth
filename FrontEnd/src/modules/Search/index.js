import React,{Component} from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {connect} from "react-redux";
class SearchComponent extends Component {
    state = {
        searchText : ""
    };
    HandelChange = (ev) =>{
        const state = this.state;
        state.searchText = ev.target.value;
        this.setState(state)
    };
    onClick = () => {
        console.log(this.state.searchText)
    };
    render() {
        return (
            <div>
                <Button onClick={this.onClick}/>
                <Input onChange={this.HandelChange} placeHolder="search"/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
});
export default connect(null,null)(SearchComponent)