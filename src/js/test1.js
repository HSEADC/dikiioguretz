console.clear()

import { initTest, chooseAnswer } from "./tests.js"
// import imgGood from '../images/results/result_good'
// import imgOk from '../images/results/result_ok'
// import imgBad from '../images/results/result_bad'


const stages = [
    {
        question: 'что такое "хомяк"?',
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
                text: 'главный экран',
                count: 0
            },
            {
                text: 'сервер для хранения файлов',
                count: 0
            }
            
        ]
    },
    {
        question: 'что значит "я в танке"?',
        answers: [
            {
                text: 'я играю в танки',
                count: 0
            },
            {
                text: 'у меня все под контролем',
                count: 0
            },
            {
                text: 'я не в курсе происходящего',
                count: 1
            },
            {
                text: 'я игнориирую разговор специально',
                count: 0
            }
            
        ]
    },
    {
        question: 'расшифруй фразу "ку кд чд"',
        answers: [            {
                text: 'привет, как дела, что делаешь',
                count: 1
            },
            {
                text: 'куда ушел, когда вернешься, чего делать',
                count: 0
            },
            {
                text: 'как у тебя, когда домой, что делаешь',
                count: 0
            },
            {
                text: 'куратор кафедры, часы дисциплины',
                count: 0
            }
        ]
    },
    {
        question: 'что называли "холиваром"?',
        answers: [            {
                text: 'затяжной спор',
                count: 1
            },
            {
                text: 'массовый бан пользователей',
                count: 0
            },
            {
                text: 'рекламную войну сайтов',
                count: 0
            },
            {
                text: 'сбой сервера',
                count: 0
            }
        ]
    },
    {
        question: 'кто такой "люркер"?',
        answers: [            {
                text: 'модератор форума',
                count: 0
            },
            {
                text: 'тот, кто провоцирует конфликты',
                count: 0
            },
            {
                text: 'пользователь, который читает, но не пишет',
                count: 1
            },
            {
                text: 'администратор сайта',
                count: 0
            }
        ]
    },
    {
        question: 'кого называли "ньюфаг"?',
        answers: [            {
                text: 'администратор форума',
                count: 0
            },
            {
                text: 'новый пользователь сообщества',
                count: 1
            },
            {
                text: 'спамер',
                count: 0
            },
            {
                text: 'старожил сайта',
                count: 0
            }
        ]
    },
    {
        question: 'что значит "з.ы."?',
        answers: [            {
                text: 'постскриптум',
                count: 1
            },
            {
                text: 'заметка',
                count: 0
            },
            {
                text: 'закрытая запись',
                count: 0
            },
            {
                text: 'заголовок сообщения',
                count: 0
            }
        ]
    },
    {
        question: 'что называли "дровами"?',
        answers: [            {
                text: 'временные файлы',
                count: 0
            },
            {
                text: 'вирусы',
                count: 0
            },
            {
                text: 'бесполезные комментарии',
                count: 0
            },
            {
                text: 'драйверы устройств',
                count: 1
            }
        ]
    }
    
]
const results = [
    {
        header: 'ты крут',
        paragraph: 'попробуй и другие тесты',
        image: ``
    },
    {
        header: 'все забывается..',
        paragraph: 'видно время оставляет свои следы',
        image: ``
    },
    {
        header: 'похоже ты зумер',
        paragraph: 'иди листай тик ток',
        image: ``
    }
]
initTest(stages)
chooseAnswer(stages, results)
