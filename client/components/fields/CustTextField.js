import React from 'react'
import classnames from 'classnames';

class CustTextField extends React.Component{

constructor(props){
    super(props);
}
    render()
    {
    return(
            <div className={classnames('form-group',{'has-error': this.props.error})}>
                <label className ="control-label" >{this.props.label}</label>
                <input 
                    value={this.props.value}
                    onChange = {this.props.onChange}
                    onBlur ={this.props.checkUserExcists}
                    type={this.props.type}
                    name={this.props.field} 
                    className="form-control" 
                    placeholder={this.props.placeHolder}
                />
                
            {this.props.error && <span className="help-block">{this.props.error}</span>}
            </div>
       );
    }
}
CustTextField.defaultProps={
    type: 'text'
}

export default CustTextField;