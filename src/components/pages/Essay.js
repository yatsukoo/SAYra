import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Essay = () => {
    return (
        <div className='essaypage'>
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
            <div className='title-essay'>
                The essay review
            </div>
            <input id='essay-place' className="word-content" placeholder='Type your essay here...'></input>
            <div className='word-cnt'>
                Words Count: 0
            </div>
            <button className='essay-btn'>Submit</button>
        </div>
    )
}
export default Essay;