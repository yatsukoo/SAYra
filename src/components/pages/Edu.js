import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Edu = () => {
    return (
        <div className='edupage'>
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
            <div className='pack'>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>&#10003;Basic Pack</h1>
                    <p className='text-block'>&#10003;3 HD video lessons & tutorials</p>
                    <p className='text-block'>&#10003;1 Official exam</p>
                    <p className='text-block'>&#10003;100 Practice questions</p>
                    <p className='text-block'>&#10003;1 Month subscriptions</p>
                    <p className='text-block'>&#10003;1 Free book</p>
                    <p className='text-block'>&#10006;Practice quizes & assignments</p>
                    <p className='text-block'>&#10006;In depth explanations</p>
                    <p className='text-block'>&#10006;Personal instructor Assitance</p>
                    <h2 className='price'>&#36;200</h2>
                    <button className='btn-block'>Purchase Course</button>
                </div>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>Standard Pack</h1>
                    <p className='text-block'>&#10003;8 HD video lessons & tutorials</p>
                    <p className='text-block'>&#10003;2 Official exam</p>
                    <p className='text-block'>&#10003;200 Practice questions</p>
                    <p className='text-block'>&#10003;1 Month subscriptions</p>
                    <p className='text-block'>&#10003;3 Free book</p>
                    <p className='text-block'>&#10003;Practice quizes & assignments</p>
                    <p className='text-block'>&#10006;In depth explanations</p>
                    <p className='text-block'>&#10006;Personal instructor Assitance</p>
                    <h2 className='price'>&#36;600</h2>
                    <button className='btn-block-av'>Purchase Course</button>
                </div>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>Premium Pack</h1>
                    <p className='text-block'>&#10003;15 HD video lessons & tutorials</p>
                    <p className='text-block'>&#10003;3 Official exam</p>
                    <p className='text-block'>&#10003;300 Practice questions</p>
                    <p className='text-block'>&#10003;1 Month subscriptions</p>
                    <p className='text-block'>&#10003;5 Free book</p>
                    <p className='text-block'>&#10003;Practice quizes & assignments</p>
                    <p className='text-block'>&#10003;In depth explanations</p>
                    <p className='text-block'>&#10003;Personal instructor Assitance</p>
                    <h2 className='price'>&#36;1200</h2>
                    <button className='btn-block'>Purchase Course</button>
                </div>
            </div>
        </div>
    );
}
export default Edu