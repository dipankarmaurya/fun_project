const express =require('express');
// const { Module } = require('module');
const router =express.Router();
const homeController = require('../controller/homecontroller');
router.get('/',homeController.home);

router.post('/create-todo',homeController.createTodo);

router.post('/delete-todo/',homeController.deleteTodo);
module.exports=router;
