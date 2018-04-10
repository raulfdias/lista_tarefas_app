import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../../vendor/css/custom.css'

import React from 'react'
import Menu from '../templates/nav_bar'
import Routes from './routes'

export default props => (
    <div className='containers'>
        <Menu />
        <Routes />
    </div>
)