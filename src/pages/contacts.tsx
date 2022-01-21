import * as React from 'react';
import {Col} from 'react-bootstrap';
import Layout from 'components/Layout/Layout';
import YandexMap from 'components/YandexMap/YandexMap';
import {mainMenuItems} from 'сonstants';

const TITLE = mainMenuItems.contacts.title;

const Contacts = ({location}) => {
    return (
        <Layout title={TITLE} location={location}>
            <Col>
                <h3>
                    <a href="https://yandex.ru/maps/-/CCUyvPsGGB" target="_blank">
                        Шоурум: Ростов-на-Дону, Каскадная улица, 200
                    </a>
                </h3>

                <h3>
                    <a href="https://yandex.ru/maps/-/CCUyvPT9dD" target="_blank">
                        Производство: Аксайский район,
                        <br />
                        шоссе Аксай-Новочеркасск, поселок Пчеловодный
                    </a>
                </h3>

                <h3>
                    <a href="tel:+79081706761">+7(908) 170-67-61</a> (лучше договориться заранее)
                </h3>

                <h3>
                    <a href="mailto:info@loftwood.ru" target="_blank">
                        info@loftwood.ru
                    </a>
                </h3>
            </Col>

            <Col>
                <YandexMap />
            </Col>
        </Layout>
    );
};

export default Contacts;