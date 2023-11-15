import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Materials = () => {
    return (
        <div className='materialspage'>
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
            <div className='title-mat'>Полезные ресурсы</div>
            <div className='materials-block'>
                <button className='btn-mat'><p className='text-mat'> Университеты США со 100% финансированием</p><div className='download'></div></button>
                <button className='btn-mat'><p className='text-mat'>IELTS Reading question strategies</p> <div className='download'></div></button>
                <button className='btn-mat'><p className='text-mat'>IELTS 6 week study plan </p><div className='download'></div></button>
                <button className='btn-mat'><p className='text-mat'>Phrasal Verbs and Idioms In Context: Suitable for levels B2-C1</p> <div className='download'></div></button>
            </div>

        </div>

    );
}

export default Materials