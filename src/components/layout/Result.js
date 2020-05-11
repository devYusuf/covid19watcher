import React from 'react';
import Loader from './Loader';

const Result = props => {
	if (props.loading) {
    	return (
    		<div className="row">
    			<div className="col-md-6 offset-md-3">
    			<br/>
	    		<hr className="has-background-danger"/>
	    		<br/>
    			<div className="">
    				<Loader />
    				</div>
    			</div>
    		</div>
    	)
    } else {
    	return (
    	<div className="row">
    		<div className="col-md-8 offset-md-2">
    		<br/>
    		<hr className="has-background-danger"/>
    		<br/>
    		<p style={{fontSize: '13px', textAlign: 'center' }}><b>Refreshed</b> at {Date()}</p>
    		<br/>
    			<div className="has-text-centered " style={{padding: '15px'}}>
			        <p className="title is-6 has-text-center r-title">showing Result for {props.data.country}</p>
			        <div className="row sans-serif">
    					<div className="col-md-6 offset-md-3 is-clearfix" style={{listStyleType: 'none'}}>
			        	<li className="" ><b><span className="is-pulled-left">Confirmed:</span>   <span className="is-pulled-right">{props.data.cases}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Recovered:</span>  <span className="is-pulled-right">{props.data.recovered}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Active:</span>  <span className="is-pulled-right">{props.data.active}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Criticals:</span>  <span className="is-pulled-right">{props.data.critical}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Today Cases:</span>  <span className="is-pulled-right">{props.data.todayCases}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Today Deaths:</span>  <span className="is-pulled-right">{props.data.todayDeaths}</span></b></li><br/>
			        	<li className="" ><b><span className="is-pulled-left">Deaths: </span> <span className="is-pulled-right">{props.data.deaths}</span></b></li>
			        	</div>
    				</div>
      			</div>
    		</div>
    	</div>
    )
  }
}

export default Result
