import React,{Component} from 'react';

class Col_s12 extends React.Component{
    render(){
        return(
            <div className="col s12 padding_0 padding_around">
                <div className="col s12 padding_0" className = {this.props.clsNames} >
                    <div className="col s12 padding_0 heading_style_outer left-align">
                        <i className="material-icons icon_common" style={{color: this.props.iconColor}}>{this.props.iconName}</i>    
                        <span className="heading_style">{this.props.headingee}</span>
                    </div>
                    <div className="col s12 padding_0 center">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
export default Col_s12;
// style={{top: this.props.iconColor}}