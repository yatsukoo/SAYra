import React, { Component } from 'react'
import { Link, Router, Routes } from 'react-router-dom';
import './style.css'
import './../.././index.css'
const Programs = () => {
    return (
        <div className='programpage'>
            <div className='upbar'>
                <div className='logo'></div>
                <div className='prof'>
                    <div className='profile'>
                        <Link to='/profile' className='course-st'>
                            <div className='prof-icon'></div>
                            <div className='profile'>Профиль</div>
                        </Link>
                    </div>
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
            <div>
                <div className='title-programs'>Программы и олимпиады</div>
                <div className='program-block'>
                    <div className='block-search1'>
                        <p className='text-Course-class'>Класс/курс</p>
                        <input className='searh-program' placeholder='Введите для поиска...'></input>
                    </div>
                    <div className='block-search'>
                        <p className='text-Course-class'>Предмет</p>
                        <input className='searh-program' placeholder='Введите для поиска...'></input>
                    </div>
                    <div className='block-search'>
                        <p className='text-Course-class'>Интересы</p>
                        <input className='searh-program' placeholder='Введите для поиска...'></input>
                    </div>
                </div>
                <div className='program-block2'>
                    <div className='block-country'>
                        <p className='text-Course-class'>Страна</p>
                        <input className='searh-program' placeholder='Введите для поиска...'></input>
                    </div>
                    <div className='filter-block'>
                        <div className='clean'>&#10006; Очистить все фильтры</div>
                        <button className='accept'>Применить</button>
                    </div>
                </div>
                <div className='search-uni'>
                    <div className='title-uni'>Поиск любых университетов или программ</div>
                    <input className='search-bar' placeholder='&#128269;Начать поиск...'></input>
                </div>
                <div className='flex-block'>
                    <div className='flex-img'></div>
                    <div className='flex-discrip'>
                        <div className='flex-title'>FLEX программа обмена</div>
                        <div className='flex-text'>Программа обмена для старшеклассников (FLEX) предоставляет<br></br>
                            старшеклассникам шанс бесплатного обучения в США на один год.</div>
                        <p className='flex-reg'>Регистрацию можете пройти через сайт</p>
                        <button className='flex-btn'>Подробнее</button>
                    </div>
                </div>
                <div className='iQanat-block'>
                    <div className='iqanat-img'></div>
                    <div className='flex-discrip'>
                        <div className='flex-title'>Олимпиада IQanat</div>
                        <div className='flex-text'>Специально для учащихся сельских школ Фонд IQanat проводит самую<br></br>
                         масштабную в Казахстане частную олимпиаду «IQanat». <br></br>
                         С помощью олимпиады мы хотим отобрать финалистов для бесплатной<br></br>
                          трехлетней подготовки к поступлению в университеты Казахстана и мира.</div>
                        <p className='flex-reg'>Регистрацию можете пройти через сайт</p>
                        <button className='qanat-btn'>Подробнее</button>
                    </div>
                </div>
                <div className='Rise-block'>
                    <div className='rise-img'></div>
                    <div className='flex-discrip'>
                        <div className='flex-title'>RISE</div>
                        <div className='flex-text'>Rise — это программа, которая находит перспективных молодых<br></br> 
                        людей и предоставляет им возможности, которые позволяют им <br></br>
                        работать вместе, чтобы служить другим на протяжении всей своей<br></br> жизни.</div>
                        <p className='flex-reg'>Регистрацию можете пройти через сайт</p>
                        <button className='qanat-btn'>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs