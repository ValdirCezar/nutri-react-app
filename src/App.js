import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        let state = this.state;
        state.list = json
        this.setState(state)
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.list.map((item) => {
          return (
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="280"
                  image={item.capa}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.subtitulo}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="outlined" color="primary">Share</Button>
                <Button variant="outlined" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;
