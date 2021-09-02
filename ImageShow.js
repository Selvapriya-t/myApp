import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, Container, Row, Col, Image, } from 'react-bootstrap';
import { RiImageAddFill } from 'react-icons/ri';
import Active from './assets/active.png';
import Arm from './assets/arm.png';
import Cpr from './assets/cpr.png';
import Cct from './assets/4-cct.png';
import Ice from './assets/12-ice pack.png';
import Cervical from './assets/cervical.png';
import Exe from './assets/exe.png';
import Exercise from './assets/exercise.png';
import Ift from './assets/ift.png';
import Leg from './assets/leg.png';
import Plyo from './assets/plyometrics.png';
import Passive from './assets/passive.png';
import Sports from './assets/sports.png';
import Strength from './assets/strengthening.png';
import Tens from './assets/tens.png';
import Tissue from './assets/tissue release.png';
import Traction from './assets/Traction.png';
import Ultra from './assets/ultrasonic therapy.png';
import Wax from './assets/wax.png';
import './ImageShow.css';
import axios from 'axios';

const ImageShow = () => {

    const [newImg, setNewImg] = useState(
        {           
            image: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newImg.image);
       
        axios.post('http://localhost:8080/api/img', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }
    
    const handleImage = (e) => {
        setNewImg({...newImg, image: e.target.files[0]});
    }


    return (
        <div>
           
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="image"
                onChange={handleImage}
            />

            
            <input 
                type="submit"
            />
        </form>

                   
             
        </div>

    );
}
export default ImageShow;