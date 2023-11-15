import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Profile = () => {
    let username = 'Aruzhan Onggar';
    let status = 'bachelor';
    return (
        <div className='Profile-page'>
            <div className='upbar'>
                <div className='logo'></div>
                <div className='prof'>
                    <Link to='/profile' className='course-st'>
                        <div className='prof-icon'></div>
                        <div className='profile'>Профиль</div>
                    </Link>
                </div>
                <p className='workspace'>workspace</p>
                <div>
                    <Link to='/edu' className='course-st'>
                        <div className='logo-c'></div>
                        <div className='course'>Курсы</div>
                    </Link>

                </div>
                <div>
                    <Link to='/courses' className='course-st'>
                        <div className='logo-s'></div>
                        <div className='speaking'>Speaking buddy</div>
                    </Link>

                </div>
                <div>
                    <Link to='/essay' className='course-st'>
                        <div className='logo-e'></div>
                        <div className='essay-text'>Проверка эссе</div>
                    </Link>

                </div>
                <div>
                    <Link to='/materials' className='course-st'>
                        <div className='logo-f'></div>
                        <div className='free-text'>Free materials</div>
                    </Link>
                </div>
                <div>
                    <Link to='/programs' className='course-st'>
                        <div className='logo-p'></div>
                        <div className='program-text'>Программы и олимпиады</div>
                    </Link>
                </div>
            </div>
            <div className='header-profile'>
                <div className='avatar'></div>
                <div className='user-info'>
                    <div className='username'>{username}</div>
                    <div className='status'>Статус: <t></t>{status}</div>
                    <div className='address'>Место проживание: Astana,Kazakhstan</div>
                </div>
                <div className='user-info2'>
                    <div className='education-info'>Образование:</div>
                    <div className='plan'>Планируется: {status}</div>
                </div>
                <div>

                </div>

            </div>
            <div className='barchart'></div>
            <div className='pre-IELTS'>
                <div className='icondrawer'></div>
                <div className='more'></div>
                <div className='title'>Pre&#8209;IELTS</div>
                <div className='usericon'></div>
                <div className='username'>{username}</div>
                <div className='diogram'></div>
            </div>
            <div className='IELTS'>
                <div className='icondrawer'></div>
                <div className='more'></div>
                <div className='title'>IELTS</div>
                <div className='usericon'></div>
                <div className='username'>{username}</div>
                <div className='diogram'></div>
            </div>


        </div>
    );
}

export default Profile