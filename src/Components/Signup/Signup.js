import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../../assets/delv_bold.png';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Grid className='signup'>
          <Cell>
            <div className='left_rec'>
              <div className='eclipse28'></div>
              <img src={logo} alt='delv-logo' className='delv_bold' />
              <div className='group_93'>
                <h1 className='firsth'>Explorer your creativity</h1>
                <p className='para'>
                  Discover new skills, meet passionate teachers and become a
                  part of the most helpful community of creatives in the world
                </p>
              </div>
              <div className='rec257'></div>
              <div className='rec256'></div>
            </div>
          </Cell>
          <Cell col={9} className='right_rec'>
            <form className='register_form'>
              <h3 className='formh3'>Create an account</h3>
              <div>
                <button className='google'>
                  <img src={google} className='google_logo' alt='google-logo' />

                  <p className='google_email'>Continue with Google</p>
                </button>
              </div>
              <div>
                <button className='facebook'>
                  <img
                    src={facebook}
                    className='facebook_logo'
                    alt='facebook-logo'
                  />

                  <p className='facebook_name'>Continue with facebook</p>
                </button>
              </div>
              <div>
                <hr className='line' />{' '}
                <span>
                  {' '}
                  <p className='or'>OR</p> <hr className='line2' />
                </span>
              </div>
              <div>
                <input
                  type='text'
                  className='fname'
                  name='firstname'
                  placeholder='First Name'
                ></input>
                <div>
                  <input
                    type='text'
                    className='lname'
                    name='lastname'
                    placeholder='Last Name'
                  ></input>
                </div>
                <div>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    className='email'
                  ></input>
                </div>
                <div>
                  <input
                    type='tel'
                    className='phone'
                    name='phone'
                    placeholder='Phone Number'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    required
                  ></input>
                </div>
                <div className='fgroup'>
                  <select name='category' className='category'>
                    <option
                      value=''
                      disabled='disabled'
                      hidden
                      selected
                      style={{ color: '#828282' }}
                    >
                      Category
                    </option>
                    <option value='student'>Student</option>
                    <option value='graduate'>Graduate</option>
                    <option value='employed'>Employed</option>
                    <option value='mentor / trainer / counsellor'>
                      Mentor / Trainer / Counsellor
                    </option>
                    <option value='institution'>Institution</option>
                  </select>
                </div>
                <div>
                  <input
                    type='password'
                    placeholder='Password'
                    name='pass'
                    className='password'
                  />
                </div>
                <div>
                  <p className='pass'>
                    Password must be a least 8 characters long
                  </p>
                </div>
                <div>
                  <button type='submit' className='submit'>
                    Sign Up
                  </button>
                </div>
                <div>
                  <p className='gotosignin'>
                    Always a member? <a href='#'>&nbsp; Sign In</a>
                  </p>
                </div>
              </div>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}
