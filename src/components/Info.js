import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div>
                <div className='info'>
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
                <div className='Serivis'>
                    <h1 className='serivis-title'>Наши сервисы</h1>
                    <div className='block-serivises'>
                        <div className='block-review'>
                            <h2 className='block-review-title'>Essay review</h2>
                            <p className='block-review-dicrip'>Проверка эссе<p>(Academic IELTS writing </p>task 1 & 2)</p>
                            <button className='block-review-btn'>Подробнее</button>
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
                <div className='Courses'>
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
                <div className='footer'>
                    <div className='foot-logo'>SAYra school</div>
                    <div className='social'>
                        <div className='telegram-icon'></div>
                        <div className='tiktok-icon'></div>
                        <div className='instagram-icon'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info