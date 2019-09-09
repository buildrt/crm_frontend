const Mock = require('mockjs');

// const Random = Mock.Random;

const loginData = function () {
  let data = [
    {
      username: 'Amazon',
      password: '123456',
      token: @data
    },
    {
      username: 'Lucy',
      password: '456789',
      token: @data
    }
  ];
  return {
    data
  }
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/login','get',loginData());
