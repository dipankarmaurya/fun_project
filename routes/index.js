const express =require('express');
// const { Module } = require('module');
const router =express.Router();
const homeController = require('../controller/homecontroller');
router.get('/',homeController.home);


module.exports=router;
