import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Routing_A from './Routing_A';
import Routing_B from './Routing_B';
import Routing_C from './Routing_C';
import Home_Page from './Home_Page';
import No_Page from './No_Page';
import Layout from './Layout';

function Routing_Parent() {
    return (
        <>
            {/* <h1>This is Routing_Parent component</h1> */}

            <BrowserRouter>

                <Routes>
                    <Route index path="/" element={ <Home_Page /> }></Route>
                    <Route path="page1" element={ <Routing_A /> }></Route>
                    <Route path="second-page" element={ <Routing_B /> }></Route>
                    <Route path="contact-page" element={ <Routing_C /> }></Route>
                    <Route path="*" element={ <No_Page /> }></Route>
                </Routes>

                <ul>
                    <li>
                        <Link to="/">Home Page link</Link>
                    </li>
                    <li>
                        <Link to="page1">Page1 link</Link>
                    </li>
                    <li>
                        <Link to="second-page">second Page link</Link>
                    </li>
                    <li>
                        <Link to="contact-page">contact Page link</Link>
                    </li>
                </ul>
                
                
                

            </BrowserRouter>
        </>
    )
}

export default Routing_Parent
