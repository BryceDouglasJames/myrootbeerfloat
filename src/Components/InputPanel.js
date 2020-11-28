import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class InputPanel extends Component{
    constructor(props){
        super(props);
        this.creams = [];
    }


    handleOptionChange  = (e)  => {
        this.props.sodaValue(e.target.value);
        this.props.changeOk(false);
    }

    updateCreams = (e) =>{
        this.props.setIces(this.creams);
        this.props.changeOk(false);
    }


    render(){
        let {item, type} = this.props;
        if(type === "Ice"){
            return(
                item.map(item => {
                    let { id } = item;
                    return (
                        <div className = "m-auto align-center">
                                <label className = "p-2">{id} </label>
                                <input
                                    type = "checkbox"
                                    onChange = {(e) => {
                                        if(e.target.checked){
                                            item.isChecked = true;
                                            this.creams.push(item.id);
                                        }else{
                                            let index = 0
                                            item.isChecked = false;
                                            if(this.creams.indexOf(item.id) !== -1){
                                                index = this.creams.indexOf(item.id);
                                                this.creams[index] = null;
                                            }
                                        }
                                        this.updateCreams(e);
                                    }}
                                />
                        </div>
                    );
                })
            );
        }else{
            return(
                item.map(item => {
                    let {id} = item;
                    return(
                        <div className = "m-auto align-center">
                            <label className = "p-2">{id} </label>
                            <input
                                type = "radio"
                                name = "soda"
                                value = {id}
                                onChange = {this.handleOptionChange}                                        
                            />
                        </div>
                    );
                })
            );
        }
    }
}