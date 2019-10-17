import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Our Band/T-shirt Company</Link>} scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/accounts">Accounts</Link>
                <Link to="/projects">Merch</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
        <img
                src="https://seeklogo.net/wp-content/uploads/2016/01/mufg-logo-vector-download.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
        </Link>}>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/accounts">Accounts</Link>
              <Link to="/projects">Merch</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
