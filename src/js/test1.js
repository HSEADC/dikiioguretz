console.clear()

import { initTest, chooseAnswer } from "./tests.js"
// import imgGood from '../images/results/result_good'
// import imgOk from '../images/results/result_ok'
// import imgBad from '../images/results/result_bad'


const stages = [
    {
        question: 'что такое хомяк??',
        answers: [
            {
                text: 'домашнее животное',
                count: 0
            },
            {
                text: 'домашняя страница',
                count: 1
            },
            {
                text: 'сервер',
                count: 0
            }
        ]
    },
    {
        question: 'кого называют люркер?',
        answers: [            {
                text: 'модератор',
                count: 0
            },
            {
                text: 'чел, который вечно начинает споры',
                count: 0
            },
            {
                text: 'чел, который все читает, но ничего не пишет',
                count: 1
            }]
    },
    {
        question: 'как расшифровывается з.ы.??',
        answers: [            {
                text: 'постскриптум',
                count: 1
            },
            {
                text: 'зюзя',
                count: 0
            },
            {
                text: 'закрытая запись',
                count: 0
            }]
    },
    {
        question: 'что такое башорг??',
        answers: [            {
                text: 'платеж за интернет',
                count: 0
            },
            {
                text: 'сайт со смешными цитатами из рунета',
                count: 1
            },
            {
                text: 'сайт организаторов мероприятий Башкиртостана',
                count: 0
            }]
    },
    {
        question: 'что значит ЖЖ?',
        answers: [            {
                text: 'сервис онлайн-дневников',
                count: 1
            },
            {
                text: 'душнила',
                count: 0
            },
            {
                text: 'карта интернета по часам',
                count: 0
            }]
    }
    
]
const results = [
    {
        header: 'ты крут',
        text: 'попробуй и другие тесты',
        image: ``
    },
    {
        header: 'все забывается..',
        text: 'видно время оставляет свои следы',
        image: ``
    },
    {
        header: 'похоже ты зумер',
        text: 'иди листай тик ток',
        image: ``
    }
]
initTest(stages)
chooseAnswer(stages, results)
