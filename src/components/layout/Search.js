import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: ''
	}

	updateCountry = e => {
		this.setState({ [e.target.name]: e.target.value });
	}
	submit = () => {
		this.props.doSubmit(this.state.text);
	}
  render() {
    return (
    	<div className="row">
    		<div className="col-md-6 offset-md-3">
				<div className="field has-addons">
					<div className="control is-expanded">
						<input className="input" type="text" list="countries" name="text" placeholder="Enter Country Name" value={this.state.text} onChange={this.updateCountry} />
					</div>
					<div className="control">
						<button className="button is-primary" onClick={this.submit}>Search</button>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Search
