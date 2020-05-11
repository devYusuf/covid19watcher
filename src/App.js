import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Result from './components/layout/Result';
import Footer from './components/layout/Footer';
import NewsCard from './components/news/NewsCard';

import './bulma.min.css';
import './App.css';
import './bootstrap-grid.css';

class App extends Component {

  state = {
    data: '',
    loading: false,
    news: [],
    loadingNews: false
  }

  async componentDidMount() {
    this.setState({loading: true, loadingNews: true});
      fetch('https://corona-stats.online/?format=json')
        .then(res => {
            return res.json();
      })
        .then((json) => {
            this.setState({data:json.worldStats, loading:false});
      });

      fetch('https://newsapi.org/v2/top-headlines?q=covid-19+coronavirus&pageSize=50&apiKey=4b6e8e3733924db7a5069b06dfa3e33c')
        .then(res => {
            return res.json();
      })
        .then((json) => {
          if(json.status === 'ok'){
            this.setState({news:json.articles, loadingNews:false});
            console.log(json)
          }
          else{
            alert("Error Fetching News!")
            }
          }
      );
  }

  
  doSubmit = async text => {
     this.setState({loading: true});
    let  res =  await fetch(`https://corona-stats.online/${text}?format=json`);
    let json = await res.json();
    this.setState({data:json.data[0], loading:false});
  }
  render(){
      const { data, loading } = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <br/>
          <Switch>
            <Route exact path="/" render={props => (
                <>
                  <h1 className="title has-text-centered poppins">COVID - 19 LIVE UPDATES</h1>
                  <Search findCountry={this.findCountry} searchResult={this.state.searchResult} doSubmit={this.doSubmit}/>   
                  <Result data={data} loading={loading} />
                </>
              )} />
              <Route exact path="/news" render={props => (
                  <>
                    <NewsCard news={this.state.news} loadingNews={this.state.loadingNews} />
                  </>
                )} />
          </Switch>  
        </div>
          <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
