console.clear()

import { initTest, chooseAnswer } from './tests.js'

import burger from '../images/Q.D1BURGER.svg'
import apple from '../images/Q.D2APPLE.svg'

import green from '../images/Q.D2GREEN.svg'
import smile from '../images/Q.D1SMILE.svg'

import bird from '../images/Q.D1BIRD.svg'
import lemon from '../images/Q.D5LEMON.svg'

import purple from '../images/Q.D2PURPLE.svg'
import coco from '../images/Q.D2COCO.svg'

import redFish from '../images/Q.D1RED.svg'
import girl from '../images/Q.D1GIRL.svg'

import d2tv from '../images/Q.D2TV.svg'
import clown from '../images/Q.D1CLOWN.svg'

import shuka from '../images/Q.D1SHUKA.svg'
import d4lemon from '../images/Q.D4LEMON.svg'

import orange from '../images/Q.D1ORANGE.svg'
import wizard from '../images/Q.D2WIZARD.svg'

const stages = [
  {
    question: 'Что такое "хомяк"?',
    imgTop: apple,
    imgBottom: burger,
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
    question: 'Что значит "я в танке"?',
    imgTop: green,
    imgBottom: smile,
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
    question: 'Расшифруй фразу "ку кд чд"',
    imgTop: bird,
    imgBottom: lemon,
    answers: [
      {
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
    question: 'Что называли "холиваром"?',
    imgTop: purple,
    imgBottom: coco,
    answers: [
      {
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
    question: 'Кто такой "люркер"?',
    imgTop: redFish,
    imgBottom: girl,
    answers: [
      {
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
    question: 'Кого называли "ньюфаг"?',
    imgTop: d2tv,
    imgBottom: clown,
    answers: [
      {
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
    question: 'Что значит "з.ы."?',
    imgTop: shuka,
    imgBottom: d4lemon,
    answers: [
      {
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
    question: 'Что называли "дровами"?',
    imgTop: orange,
    imgBottom: wizard,
    answers: [
      {
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
    paragraph: 'Ты крут! Попробуй и другие тесты',
    image: ``
  },
  {
    paragraph: 'Все забывается.. Видно время оставляет свои следы',
    image: ``
  },
  {
    paragraph: 'Похоже, ты зумер.. Иди листай тик ток)',
    image: ``
  }
]
initTest(stages)
chooseAnswer(stages, results)
