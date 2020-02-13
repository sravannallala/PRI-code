import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import "./assets.css"

class AssetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/data')
         .then(results => results.json()).then(data=>this.setState({ assets: data.data}));
  }

  render() {
    const styleObj = {
      fontSize: 13,
      color: "#4a54f1",
      textAlign: "center",           
fontFamily: 'quicksand,sans-serif'
}
    const tableHeader = (
      <TableHead>
        <TableRow >
        <TableCell><b style={styleObj}>Device Name</b></TableCell>
          <TableCell><b style={styleObj}>Device Topic</b></TableCell>
          <TableCell><b style={styleObj}>Device Message</b></TableCell>
          <TableCell><b style={styleObj}>Local IP Address</b></TableCell>
          <TableCell><b style={styleObj}>Destination IP Address</b></TableCell>
        </TableRow>
      </TableHead>
    );
    const content = (
      <TableBody>
          <TableRow>
            <TableCell>DHT_11</TableCell>
            <TableCell>/sys/a1fV9f6XxJc/DHT11_Sensor/event/post</TableCell>
            <TableCell>'id':1579741192,'params':'temperature':</TableCell>
            <TableCell>192.168.43.122</TableCell>
            <TableCell>106.15.100.2</TableCell>
          </TableRow>
      </TableBody>
    );
    return (
      <div className="App-GridDiv">
        <Grid container justify="center">
          <Paper>
            <Table>
              {tableHeader}
              {content}
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default AssetDetails;