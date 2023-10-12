import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:
               'url("https://cdn.pixabay.com/photo/2017/11/23/14/54/food-2972974_1280.jpg")'}}>
          <div className='headerContainer'>
            <h1>Welcome 2 Restros</h1>
            <p>Best Food In India</p>
            <Link to='/menu'>
              <Button>
                ORDER NOW
              </Button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home