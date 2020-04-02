import React, {Component} from 'react';
import axios from "axios";
import Moment from 'react-moment';
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  } from 'react-table'
class Table extends React.Component{
    state = {
        docsArray: [],
        counstArray: [],
        phaseCountsArray: [],
        headersObj: {}
    };
    componentDidMount() {

        axios({
            method: 'post',
            url: "http://test.ablck.com/api/adminPaginatedPost?page=1&limit=50",
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJlbWFpbCI6InVzZXIxMjM0QGdtYWlsLmNvbSIsIm5hbWUiOiJJbmZsdWVuY2VyIiwidXNlcm5hbWUiOiJzdXBlcnVzZXIiLCJwcm9maWxlSW1nIjoiaHR0cHM6Ly9pdGluZXJhcnktdXBsb2Fkcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vMTU3NTM3MjM3NzU4Nl81Y2QyZTYzNzIwMGNmOTM1N2FkNmFlNWMiLCJ0eXBlIjoiQWRtaW4iLCJleHAiOjE1ODYxODY5MTAsImlhdCI6MTU4NTU4MjExMH0.ZOUJfjlWiQVTTJJ9r0l4iFGWocvDqzTXK6bFfJARGwc" }
            
          }).then(response => {
            var res= response.data.users;
             this.setState({
                 docsArray: response.data.users.docs,
                 counstArray: response.data.users.counts,
                 phaseCountsArray: response.data.users.phase_counts
             });
        //console.log(res.docs);
         })

         axios({
            method: 'get',
            url: "https://api.myjson.com/bins/e8wv4",
            headers: { Authorization: "Bearer undefined" }
            
          }).then(response => {
            var res1= response.data;
            
             this.setState({
                headersObj: response.data.apiKeysToLabelMap
             });
             
         })
        
       }

    render(){
       
       
        let Header_1 = (this.state.headersObj) ? this.state.headersObj:'';
        
        let endDate = (this.state.docsArray.length) ?
        this.state.docsArray.map(el => (
                    (el.campaign_info_new.travelSpans.length)? 
                            el.campaign_info_new.travelSpans.map(yz => (
                                yz.spanStartDate
                            )):console.log("sorry")
                        
        )):'';
       
 
        return(
            <div className="row">
                <div className="col s12 padding_0">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    {Header_1.user_name}
                                </th>
                                <th>
                                    Travelling on
                                </th>
                                <th>
                                    {Header_1.present_state}
                                </th>
                                <th>
                                    Destination
                                </th>
                                <th>
                                    {Header_1.influencer}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {
                                this.state.docsArray.map(el => (
                                    <td key= {el._id}>{el.user_name}</td>
                                    ))
                            }   

                            
                            <td>{endDate[0]}</td>

                        </tr>
                           
                        </tbody>
                    </table>
                </div>  
            </div>
        );
    }
}
export default Table;
