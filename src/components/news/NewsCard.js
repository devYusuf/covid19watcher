import React, { Component } from 'react';
import Loader from '../layout/Loader'

class NewsCard extends Component {
  render() {
  	if(this.props.loadingNews) {
  		return(
  		<div className="row">
    		<div className="col-md-6 offset-md-3">
		  		<h4 className="title is-4 poppins">COVID - 19 LATEST NEWS</h4>
		    	<br/>
  				 <Loader/>
  			</div>
  		</div>
  		)
  	}
    return (
    	<div className="row">
    		<div className="col-md-6 offset-md-3">
    			<h4 className="title is-4 poppins">COVID - 19 LATEST NEWS</h4>
    			<br/>
    			{ this.props.news.map(nw => (
	    			<div className="card" style={{margin: '10px'}} key={nw.title}>
		    			<div className="card-image">
						    <figure className="image">
						      <img src={nw.urlToImage} alt={nw.title} style={{width: '100%', height: '180px'}}/>
						    </figure>
	  					</div>
	  					<div className="card-content">
	  						<h4 className="title is-4">{nw.title} - <span className="title is-6 secondary">{nw.source.name}</span></h4>
	  						<p>{nw.description}....<a href={nw.url}>read article</a></p>
	  					</div>
					</div>
    				)) }
    		</div>
    	</div>
    )
  }
}

export default NewsCard
