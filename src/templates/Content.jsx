import React,{ Component} from "react";
//Styles
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-card/dist/card.css';
import '@material/react-button/dist/button.css';

//Instation
//import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import {Button} from '@material/react-button';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";


//Content
export class ContentBody extends Component{
    render(){
        return(
            <div>
                <Grid>
                  <Row>
                    <Cell columns={4}>
                        <Card>
                            <CardPrimaryContent>
                                <h1>Header</h1>
                                <CardMedia square imageUrl='https://miro.medium.com/max/3600/1*Xt3l-_54wuxdsHpiolGP3g.jpeg' />
                            </CardPrimaryContent>

                            <CardActions>
                                <CardActionButtons>
                                <Button unelevated>
                                    Click Me!
                                </Button>
                                </CardActionButtons>

                                <CardActionIcons>
                                <i>Click Me Too!</i>
                                </CardActionIcons>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell columns={4}>
                    <Card>
                            <CardPrimaryContent>
                                <h1>Header</h1>
                                <CardMedia square imageUrl='https://miro.medium.com/max/3600/1*Xt3l-_54wuxdsHpiolGP3g.jpeg' />
                            </CardPrimaryContent>

                            <CardActions>
                                <CardActionButtons>
                                <Button unelevated>
                                    Click Me!
                                </Button>
                                </CardActionButtons>

                                <CardActionIcons>
                                <i>Click Me Too!</i>
                                </CardActionIcons>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell columns={4}>
                    <Card>
                            <CardPrimaryContent>
                                <h1>Header</h1>
                                <CardMedia square imageUrl='https://miro.medium.com/max/3600/1*Xt3l-_54wuxdsHpiolGP3g.jpeg' />
                            </CardPrimaryContent>

                            <CardActions>
                                <CardActionButtons>
                                <Button unelevated>
                                    Click Me!
                                </Button>
                                </CardActionButtons>

                                <CardActionIcons>
                                <i>Click Me Too!</i>
                                </CardActionIcons>
                            </CardActions>
                        </Card>
                    </Cell>
                  </Row>

                </Grid>
            </div>
        );
    }
}

export default ContentBody;
