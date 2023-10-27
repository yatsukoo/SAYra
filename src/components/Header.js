import React, { Component, useState } from 'react'
import Modal from './Modal';

const Header = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            {
                <div className='header'>
                    <div className='navbar'>
                        <p>О нас</p>
                        <p>Сервисы</p>
                        <p>Блог</p>
                        <p className='logo'>SAYra school</p>
                        <p className='navItem'>Курсы</p>
                        <p className='navItem'>Контакты</p>
                        <p className='Login'>Login →</p>
                        <button className='Sign-up' onClick={() => setModalActive(true)}>Sign up</button>
                    </div>
                    <div className='title'>Доступное<br /> образование для всех</div>
                    <div className='discription'>
                        Запланируйте бесплатную консультацию с нашими опытными <br />консультантами по приему и получите
                        индивидуальные <br />рекомендации для подготовки к международным экзаменам.
                    </div>
                    <div className='btn-consul'>
                        <button className='free-consul'>Бесплатная<br /> консультация</button>
                    </div>
                    <div className='overlay'></div>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className='form-div'>
                            <div>
                                <div className='book-icon'></div>
                                <p className='form-logo'>SAYra</p>
                                <p className='form-dicrip'>Welcome to <p>SAYra Platform</p></p>
                                <div className='backround-form'>
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
            }
        </>

    )
}
export default Header;