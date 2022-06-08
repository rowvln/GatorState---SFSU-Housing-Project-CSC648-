import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class FilterSelection extends Component {
    
    constructor(props){
        super(props);
        this.onTargetSelect = this.onTargetSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: "",
            title: 'Housing Type'
        };

    }
    onTargetSelect(target){
        this.setState({title: target});

    }
    handleChange = () => {
        this.setState();
    }

    render(){
        return(
            <DropdownButton
                type="checkbox"
                value={this.state.value}
                title={this.state.title}
            >
                <Dropdown.Item value={"apartment"} onSelect={()=> this.onTargetSelect("Apartment")}>Apartment</Dropdown.Item>
                <Dropdown.Item value={"house"} onSelect={()=> this.onTargetSelect("House")}>House</Dropdown.Item>
                <Dropdown.Item value={"dorm"} onSelect={()=> this.onTargetSelect("Dorm")}>Dorm</Dropdown.Item>
            </DropdownButton>
        );
    }
}


export default FilterSelection