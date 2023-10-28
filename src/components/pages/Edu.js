import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
const Edu = () => {
    return (
        <div className='edupage'>
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
            <div className='pack'>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>Basic Pack</h1>
                    <p className='text-block'>3 HD video lessons & tutorials</p>
                    <p className='text-block'>1 Official exam</p>
                    <p className='text-block'>100 Practice questions</p>
                    <p className='text-block'>1 Month subscriptions</p>
                    <p className='text-block'>1 Free book</p>
                    <p className='text-block'>Practice quizes & assignments</p>  
                    <p className='text-block'>In depth explanations</p>  
                    <p className='text-block'>Personal instructor Assitance</p>  
                    <h2 className='price'>200</h2>
                    <button className='btn-block'>Purchase Course</button>
                </div>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>Standard Pack</h1>
                    <p className='text-block'>8 HD video lessons & tutorials</p>
                    <p className='text-block'>2 Official exam</p>
                    <p className='text-block'>200 Practice questions</p>
                    <p className='text-block'>1 Month subscriptions</p>
                    <p className='text-block'>3 Free book</p>
                    <p className='text-block'>Practice quizes & assignments</p>  
                    <p className='text-block'>In depth explanations</p>  
                    <p className='text-block'>Personal instructor Assitance</p>  
                    <h2 className='price'>600</h2>
                    <button className='btn-block'>Purchase Course</button>
                </div>
                <div className='basic-c'>
                    <div className='price-img'></div>
                    <h1 className='title-basic'>Premium Pack</h1>
                    <p className='text-block'>15 HD video lessons & tutorials</p>
                    <p className='text-block'>3 Official exam</p>
                    <p className='text-block'>300 Practice questions</p>
                    <p className='text-block'>1 Month subscriptions</p>
                    <p className='text-block'>5 Free book</p>
                    <p className='text-block'>Practice quizes & assignments</p>  
                    <p className='text-block'>In depth explanations</p>  
                    <p className='text-block'>Personal instructor Assitance</p>  
                    <h2 className='price'>1200</h2>
                    <button className='btn-block'>Purchase Course</button>
                </div>
            </div>
        </div>
    );
}
export default Edu