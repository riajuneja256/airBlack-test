import React, {Component} from 'react';
import "../home.css";
import Col_s12 from './outerBoxCol_12';
import axios from "axios";
import '../chart.png';
import Moment from 'react-moment';

class OuterBox extends React.Component{
    state = {
        name: "",
        data: []
    };
    
    componentDidMount() {
        const AuthStr = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJlbWFpbCI6InVzZXIxMjM0QGdtYWlsLmNvbSIsIm5hbWUiOiJJbmZsdWVuY2VyIiwidXNlcm5hbWUiOiJzdXBlcnVzZXIiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9pdGluZXJhcnktdXBsb2Fkcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vMTU3NTM3MjM3NzU4Nl81Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJ0eXBlIjoiQWRtaW4iLCJleHAiOjE1ODYxMDkyMzgsImlhdCI6MTU4NTUwNDQzOH0.gnIQZxjq8ks4ezjFJ6lKCXLUBMNkwCyUJyWo-KS5wjQ';
        axios.get('http://test.ablck.com/api/verifyToken', { headers: { Authorization: AuthStr } })
        .then(response => {
           var res= response.data;
            this.setState({
                name: res.name
            });
        })
        .catch((error) => {
            console.log('error ' + error);
        });



        const AuthStr1 = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJlbWFpbCI6InVzZXIxMjM0QGdtYWlsLmNvbSIsIm5hbWUiOiJJbmZsdWVuY2VyIiwidXNlcm5hbWUiOiJzdXBlcnVzZXIiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9pdGluZXJhcnktdXBsb2Fkcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vMTU3NTM3MjM3NzU4Nl81Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJ0eXBlIjoiQWRtaW4iLCJleHAiOjE1ODYxODY5MTAsImlhdCI6MTU4NTU4MjExMH0.ZOUJfjlWiQVTTJJ9r0l4iFGWocvDqzTXK6bFfJARGwc';
        axios.get('http://test.ablck.com:3000/api/trips/upcoming?start=1&limit=50', { headers: { Authorization: AuthStr } })
        .then(response => {
            // If request is good...
           
           var res1= response.data.data.results;
           console.log(res1);
            this.setState({
                data: res1
            });
            console.log(this.state.data[0].user_name);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
       }


    render(){
        
        let groupName = (this.state.data && this.state.data.length && this.state.data[0] && this.state.data[0].hasOwnProperty('group_name'))?this.state.data[0].group_name:'';
        let campaign_info = (this.state.data && this.state.data.length && this.state.data[0] && this.state.data[0].hasOwnProperty('campaign_info_new'))?this.state.data[0].campaign_info_new.travelDestinations.toString():'';
        let startDate = (this.state.data && this.state.data.length && this.state.data[0] && this.state.data[0].hasOwnProperty('campaign_info_new'))?this.state.data[0].campaign_info_new.travelSpans[0].spanStartDate.substring(0, 10):'';
        let endDate = (this.state.data && this.state.data.length && this.state.data[0] && this.state.data[0].hasOwnProperty('campaign_info_new'))?this.state.data[0].campaign_info_new.travelSpans[0].spanEndDate.substring(0, 10):'';

        return(
            <div className="row">
                <div className="col s12 padding_0">
                    <div className="col s12 padding_0 hello_heading left-align">Hello {this.state.name}, morning! 🙂</div>
                    <div className="col s12 padding_0 body_style">
                        <div className="col s3 padding_0">
                            <Col_s12 clsNames  = {"parent_style_short"} headingee = {"In Planning Trips"} iconColor = {"brown"} iconName = {"event_note"}>
                                <div className="col s12 number">201</div>
                                <div className="col s12 ">
                                    <div className="col s12" style= {{paddingTop:20}}>
                                        <div className="col s6 numberbackground">
                                            <div className="col s12 padding_0 subnumber">56</div>
                                            <div className="col s12 padding_0 subhead">Route Planned</div>
                                        </div>
                                        <div className="col s6 numberbackground_2">
                                            <div className="col s12 padding_0 subnumber">14</div>
                                            <div className="col s12 padding_0 subhead">Details Planned</div>
                                        </div>
                                    </div>
                                </div>
                            </Col_s12>    
                        </div>
                        <div className="col s3 padding_0">
                            <Col_s12 clsNames  = {"parent_style_short"} headingee = {"Completed Trips"} iconColor = {"#19C928"} iconName = {"check_box"}>
                                <div className="col s12 number">83</div>
                                <div className = "col s12 viewAll">View all completed trips </div>
                            </Col_s12>        
                        </div>
                        <div className="col s6 padding_0">
                            <Col_s12 clsNames  = {"parent_style_short"} headingee = {"Planning Graph"}>
                                <div className="col s12 padding_0">
                                    <img className="image_style" src={require('../chart.png')}></img>
                                </div>
                            </Col_s12>        
                        </div>
                        <div className = "col s12 padding_0">
                            <div className="col s3 padding_0">
                                <Col_s12 clsNames  = {"parent_style_short"} headingee = {"Engaged Trips"} iconColor = {"gray"} iconName = {"chat"}>
                                    <div className="col s12 number">43%</div>
                                    <div className="col s12 engaged_trips">86 Trips Engaged</div>
                                </Col_s12>        
                                <Col_s12 clsNames  = {"parent_style_short"} headingee = {"Ratings"} iconColor = {"yellow"} iconName = {"star"}>
                                    <div className="col s12 number_custom">3/5</div>
                                </Col_s12>   
                            </div>
                            <div className="col s9 padding_0">
                                <div className="col s4 padding_0">
                                    <Col_s12 clsNames  = {"parent_style_long"} headingee = {"Milestones Gained"} iconColor = {"red"} iconName = {"flag"}>
                                        <div className="col s12 number">92</div>
                                        <div className="col s12 achieved">65% Achieved</div>
                                        <div className="col s12 " style = {{paddingTop:130}}>
                                            <div className="col s12" style= {{paddingTop:20}}>
                                                <div className="col s6 numberbackground_lower">
                                                    <div className="col s12 padding_0 subnumber">56</div>
                                                    <div className="col s12 padding_0 subhead">Route Planned</div>
                                                </div>
                                                <div className="col s6 numberbackground__lower2">
                                                    <div className="col s12 padding_0 subnumber">14</div>
                                                    <div className="col s12 padding_0 subhead">Details Planned</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 ">
                                            <div className="col s12" style= {{paddingTop:20}}>
                                                <div className="col s6 numberbackground_lower">
                                                    <div className="col s12 padding_0 subnumber">56</div>
                                                    <div className="col s12 padding_0 subhead">Route Planned</div>
                                                </div>
                                                <div className="col s6 numberbackground__lower2">
                                                    <div className="col s12 padding_0 subnumber">14</div>
                                                    <div className="col s12 padding_0 subhead">Details Planned</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col_s12>            
                                </div>
                                <div className="col s4 padding_0">
                                    <Col_s12 clsNames  = {"parent_style_long"} headingee = {"Upcoming Due Dates (6)"}>
                                        <div className="row padding_0" style={{margin:0}}>
                                            <div className="col s12">
                                                <div className="col s12 padding_0 priSecParent overflow_style">
                                                    {this.state.data.map(el => (
                                                        <div className="col s12 priSecParent" key= {el._id}>
                                                            <div className="col s12 primary padding_0">{el.user_name}</div>
                                                            <div className="col s12 secondary padding_0">{el.campaign_info_new.travelDestinations.toString()}</div>
                                                            <div className="col s12 secondary padding_0">
                                                                <Moment format="Do MMM YY">{el.campaign_info_new.travelSpans[0].spanStartDate.substring(0, 10)}</Moment>
                                                                    &nbsp;&nbsp;to&nbsp;&nbsp;
                                                                <Moment format="Do MMM YY">{el.campaign_info_new.travelSpans[0].spanEndDate.substring(0, 10)}</Moment>    
                                                            </div> 
                                                        </div>
                                                    ))}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Col_s12>        
                                </div>
                                <div className="col s4 padding_0">
                                    <Col_s12 clsNames  = {"parent_style_long"} headingee = {"Overdue (4)"}/>
                                </div>
                            </div>
                        </div>
                                            {/* <ul>
                                                {topics.map(({ name, id }) => (
                                                <li key={id} onClick={() => this.handleClick()}>
                                                    <Link to={`/topics/${id}`}>{name}</Link>
                                                </li>
                                                ))}
                                            </ul> */}


                    </div>
                </div>
            </div>
        );
    }
}
export default OuterBox;