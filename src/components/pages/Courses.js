import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Courses = () => {
    return (
        <div className='coursepage'>
            <div className='upbar'>
                <div className='logo'></div>
                <div className='prof'>
                    <div className='prof-icon'></div>
                    <div className='profile'>Профиль</div>
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
                    <div className='logo-f'></div>
                    <div className='free-text'>Free materials</div>
                </div>
                <div>
                    <div className='logo-p'></div>
                    <div className='program-text'>Программы и олимпиады</div>
                </div>
            </div>
            <div>
                <h3 className='speaking-title'>Speaking buddy</h3>
                <div className='blog-image'></div>
            </div>
        </div>

    );
}

export default Courses