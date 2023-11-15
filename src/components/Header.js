import React, { Component, useState } from 'react'
import Modal from './Modal';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            {
                <div>
                   <div className='header'>
                    <div className='navbar'>
                        <a className='navclick' href='#block-info'>О нас</a>
                        <a className='navclick' href='#block-services'>Сервисы</a>
                        <a className='navclick' href='#block-blog'>Блог</a>
                        <p className='logo'>SAYra school</p>
                        <a  href='#block=course' className='navItem'>Курсы</a>
                        <a href='#block-contacts' className='navItem'>Контакты</a>
                        <p className='Login'>Login →</p>
                        <button className='Sign-up' onClick={() => setModalActive(true)}>Sign up</button>
                    </div>
                    <div className='title'>Доступное<br /> образование для всех</div>
                    <div className='discription'>
                        Запланируйте бесплатную консультацию с нашими опытными <br />консультантами по приему и получите
                        индивидуальные <br />рекомендации для подготовки к международным экзаменам.
                    </div>
                    <div className='btn-consul'>
                        <button className='free-consul'><a className='btn-ref-color' href='https://instagram.com/studywitharuzhan?igshid=ZmplZzVjZDM4eHNp'>Бесплатная<br /> консультация</a></button>
                    </div>
                    <div className='overlay'></div>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className='form-div'>
                            <div>
                                <div className='book-icon'></div>
                                <p className='form-logo'>SAYra</p>
                                <p className='form-dicrip'>Welcome to</p>
                                <p className='form-dicrip'>SAYra Platform</p>
                                <div className='backround-form'>
                                    <div className='main-img2'></div>
                                    <div className='vasa-img'></div>
                                </div>
                            </div>
                            <div>
                                <div className='google'>
                                    <div className='logo-google'></div>
                                    Signup with google
                                </div>
                                <h4 className='text-form'>Or signup with your email</h4>
                                <p className='text-name'>Full Name</p>
                                <input className='fullname' placeholder='input your full name'></input>
                                <p className='text-email'>Email</p>
                                <input className='email' placeholder='input your email'></input>
                                <p className='text-password'>Password</p>
                                <input className='password' placeholder='input your password'></input>
                                <div className='agreed'>
                                    <input type='radio'></input>
                                    <p className='text-radio'>I agreed to the <a className='Term'> Terms & Conditions</a></p>
                                </div>
                                <button className='form-sign'>Sign Up</button>
                                <p className='ask-form'>Alreay have account? <a className='ask-form-ref'>Sign in</a></p>
                            </div>

                        </div>
                    </Modal>
                </div>
                <div>
                <div id ='block-info' className='info'>
                    <h1 className='title-info'>О нас</h1>
                    <div className='info-main'>
                        <div className='Aruzhan'></div>
                        <div className='text-dicription'>
                            <p>Всем привет! Меня зовут Аружан, я создала SAYra school,
                                чтобы ваш путь к перспективному будущему и качественному
                                образованию был безболезненным и максимально эффективным.
                            </p>
                            <h3>Немного обо мне:</h3>
                            <li>Закончила частную школу - <a className='ref-school' href='https://iqhsb.kz/ru'>IQanat High School of Burabay </a><b />поступив туда на грант с помощью английского языка</li>
                            <li>Получила бронзовую медаль "Медаль Елбасы"</li>
                            <li>В 2022 получила <a className='ref-school'>full-ride scholatship от Vvytaus magnus Литва и KAZGUU university</a></li>
                            <button className='more'>Подбробнее</button>
                            <p><a className='SAYra-styles'>SAYra school</a>- школа которая поможет вам заговорить на английском и набрать желаемый балл </p>
                            <p className='element-dicrip'>Цель проекта - это помочь каждому из вас, кто жаждет стать<p>лучшей версией себя:выучить английский язык, сдать IELTS или</p>поступить за границу.<p>Мы станем большой семьей за которой стоит будущее.</p></p>
                        </div>
                    </div>
                </div>
                <div id = 'block-services' className='Serivis'>
                    <h1 className='serivis-title'>Наши сервисы</h1>
                    <div className='block-serivises'>
                        <div className='block-review'>
                            <h2 className='block-review-title'>Essay review</h2>
                            <p className='block-review-dicrip'>Проверка эссе<p>(Academic IELTS writing </p>task 1 & 2)</p>
                            <button className='block-review-btn'> <Link to ="/essay" className='cat-text'>Подробнее</Link></button>
                            <div className='icon-notes'></div>
                        </div>
                        <div className='block-speaking'>
                            <h2 className='block-speaking-title'>Поиск программ и олимпиад</h2>
                            <p className='block-speaking-dicrip'>Изучите олимпиады и<p>программы,с помощью</p> фильтров</p>
                            <button className='block-speaking-btn'>Подробнее</button>
                            <div className='icon-user'></div>
                        </div>
                        <div className='block-consult'>
                            <h2 className='block-consult-title'>Platform</h2>
                            <p className='block-consult-dicrip'>Ознакомьтесь с нашими<p>курсами по IELTS на нашей </p>платформе </p>
                            <button className='block-consult-btn'>Подробнее</button>
                            <div className='icon-consult'></div>
                        </div>
                    </div>
                </div>
                <div id ='block=course' className='Courses'>
                    <h2 className='Courses-title'>Наши курсы</h2>
                    <div className='block-courses'>
                        <div className='pre-IELTS'>
                            <div className='image-ielts'></div>
                            <p className='text'>24 lessons • online • individual/group</p>
                            <h3 className='title'>PRE-IELTS</h3>
                            <button className='btn'>Подробнее</button>
                        </div>
                        <div className='IELTS'>
                            <div className='image-ielts'></div>
                            <p className='text'>24 lessons • online • individual/group</p>
                            <h3 className='title'>IELTS</h3>
                            <button className='btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className='mass-m'>
                    <div className='title-info'>
                        <p>СМИ О НАС</p>
                    </div>
                    <div className='mass-media'>
                        <div className='tengri'></div>
                        <div className='kazguu'></div>
                        <div className='khan'></div>
                    </div>
                </div>
                <div id='block-contacts' className='footer'>
                    <div className='foot-logo'>SAYra school</div>
                    <div className='social'>
                        <div className='telegram-icon'></div>
                        <div className='tiktok-icon'></div>
                        <div className='instagram-icon'></div>
                    </div>
                </div>
                </div> 
                </div>
                
            }
            
        </>

    )
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1); // Извлекаем id якоря
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Прокручиваем страницу к блоку
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
export default Header;