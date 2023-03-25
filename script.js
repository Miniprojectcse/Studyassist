'use strict'
const homeBtn = document.querySelector('.home');
const scheduleBtn = document.querySelector('.schedule');
const noteBtn = document.querySelector('.note');
const remainderBtn = document.querySelector('.remainder');
const fileBtn = document.querySelector('.file');

scheduleBtn.addEventListener('onclick', function()
{
    document.querySelector('.home').classList.remove('active');
    scheduleBtn.classList.add('active');
    // document.querySelector('.schedule').classList.add('active');
    document.querySelector('.note').classList.remove('active');
    document.querySelector('.remainder').classList.remove('active');
    document.querySelector('.file').classList.remove('active');
});