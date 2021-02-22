import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../../assets/delv_bold.png';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Grid className='signup'>
          <Cell>
            <div className='left_rec'>
              <img src={logo} alt='delv-logo' className='delv_bold' />
              <div className='group_93'>
                <h1 className='firsth'>Explorer your creativity</h1>
                <p className='para'>
                  Discover new skills, meet passionate teachers and become a
                  part of the most helpful community of creatives in the world
                </p>
              </div>
            </div>
          </Cell>
          <Cell col={9} className='right_rec'>
            <form className='register_form'>
              <h3 className='formh3'>Create an account</h3>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}
