import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Black T-Shirt</CardTitle>
            <CardText>Paint it black     $20</CardText>
            <CardActions border>
              <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Yellow T-Shirt</CardTitle>
            <CardText> Yellow is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Gray T-Shirt</CardTitle>
            <CardText> Nevermind, gray is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
      // long sleeves
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Black Long Sleeve</CardTitle>
            <CardText>Paint it black     $20</CardText>
            <CardActions border>
              <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Yellow Long Sleeve</CardTitle>
            <CardText> Yellow is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Gray Long Sleeve</CardTitle>
            <CardText> Nevermind, gray is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Black Jacket</CardTitle>
            <CardText>Paint it black     $20</CardText>
            <CardActions border>
              <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Yellow Jacket</CardTitle>
            <CardText> Yellow is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Gray Jacket</CardTitle>
            <CardText> Nevermind, gray is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Black Hat</CardTitle>
            <CardText>Paint it black     $20</CardText>
            <CardActions border>
              <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Yellow Hat</CardTitle>
            <CardText> Yellow is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Gray Hat</CardTitle>
            <CardText> Nevermind, gray is the new black    $20</CardText>
            <CardActions border>
            <Button colored>S</Button>
              <Button colored>M</Button>
              <Button colored>L</Button>
              <Button colored>XL</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>T-Shirts</Tab>
          <Tab>Long Sleeves</Tab>
          <Tab>Jackets</Tab>
          <Tab>Hats</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
