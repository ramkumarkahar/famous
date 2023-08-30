import React from 'react'
import {Link} from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
        <div className='head'>
            <h3 className='text-center'>
                Hello Fellows
            </h3>
        </div>
        <div className='aa container-fluid col-10 my-2 ' >
            <p>
                This is a website to check out the most famous personality among the first year students.
                It is a very secure website and non of your personal details will be leaked. Please feel free to 
                participate in this competition and help us make this event a grand success.
            </p>
        </div>
        <div className='aa container-fluid col-10 my-2 '>
            <ul>
                <li>
                    Fill the requisites.
                </li>
                <li>
                    Wait for two days and then.
                </li>
                <li>
                    Like the photo of the person you know or you have crush on.
                </li>
                <li>
                    You don't have to like all the posts.
                </li>
                <li>
                    submit your opinion.
                </li>
                <li>
                    The result will be declared after two days.
                </li>
            </ul>
        </div>
        <div className='aa container-fluid col-10 my-2 '>
            <h4>
                STEPS :-
            </h4>
            <ul>
                <li>
                    Hit the continue button to participate.
                </li>
                <li>
                    Fill all the requisites.
                </li>
                <li>
                    Upload the best pic of yours.
                </li>
                <li>
                    Click on the submit button.
                </li>
            </ul>
        </div>
        <div className='row'>
           <div className='btn col my-3  '>
              <Link className=' mx-auto' to="/form"> <input className="btn btn-primary" type="button" value="continue"/></Link>
            </div>
        </div>
    </div>
  )
}
