'use strict';

var categories = [
  {_id: '55196b3e0042a1db62223a05', name: '男装/运动户外', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c387', name: 'POLO衫', parent: '55196b3e0042a1db62223a05'},
  {_id: '5523bc489294d58a8e06c388', name: '休闲短裤', parent: '55196b3e0042a1db62223a05'},
  {_id: '5523bc489294d58a8e06c389', name: '牛仔短裤', parent: '55196b3e0042a1db62223a05'},
  {_id: '5523bc489294d58a8e06c38a', name: '短袖衬衫', parent: '55196b3e0042a1db62223a05'},
  {_id: '5523bc489294d58a8e06c38b', name: '长袖衬衫', parent: '55196b3e0042a1db62223a05'},

  {_id: '55196b3e0042a1db62223a06', name : '女装', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c38c', name: '雪纺衫', parent: '55196b3e0042a1db62223a06'},
  {_id: '5523bc489294d58a8e06c38d', name: '蕾丝衫', parent: '55196b3e0042a1db62223a06'},
  {_id: '5523bc489294d58a8e06c38e', name: '针织衫', parent: '55196b3e0042a1db62223a06'},
  {_id: '5523bc489294d58a8e06c38f', name: '连衣裙', parent: '55196b3e0042a1db62223a06'},
  {_id: '5523bc489294d58a8e06c390', name: '牛仔裤', parent: '55196b3e0042a1db62223a06'},

  {_id: '55196b3e0042a1db62223a07', name: '女鞋/男鞋/箱包', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c391', name: '帆布鞋', parent: '55196b3e0042a1db62223a07'},
  {_id: '5523bc489294d58a8e06c392', name: '圆头单鞋', parent: '55196b3e0042a1db62223a07'},
  {_id: '5523bc489294d58a8e06c393', name: '豆豆鞋', parent: '55196b3e0042a1db62223a07'},
  {_id: '5523bc489294d58a8e06c394', name: '手提女包', parent: '55196b3e0042a1db62223a07'},
  {_id: '5523bc489294d58a8e06c395', name: '斜跨女包', parent: '55196b3e0042a1db62223a07'},


  {_id: '55196b3e0042a1db62223a08', name: '化妆品/个人护理', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c396', name: '化妆水', parent: '55196b3e0042a1db62223a08'},
  {_id: '5523bc489294d58a8e06c397', name: '精油芳疗', parent: '55196b3e0042a1db62223a08'},
  {_id: '5523bc489294d58a8e06c398', name: '洗面奶', parent: '55196b3e0042a1db62223a08'},
  {_id: '5523bc489294d58a8e06c399', name: '护手霜', parent: '55196b3e0042a1db62223a08'},
  {_id: '5523bc489294d58a8e06c39a', name: '睫毛膏', parent: '55196b3e0042a1db62223a08'},


  {_id: '55196b3e0042a1db62223a09', name: '母婴玩具', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c39b', name: '婴儿玩具', parent: '55196b3e0042a1db62223a09'},
  {_id: '5523bc489294d58a8e06c39c', name: '毛绒玩具', parent: '55196b3e0042a1db62223a09'},
  {_id: '5523bc489294d58a8e06c39d', name: '早教益智', parent: '55196b3e0042a1db62223a09'},
  {_id: '5523bc489294d58a8e06c39e', name: '爬行健身', parent: '55196b3e0042a1db62223a09'},
  {_id: '5523bc489294d58a8e06c39f', name: '模型', parent: '55196b3e0042a1db62223a09'},

  {_id: '55196b3e0042a1db62223a0a', name: '零食/进口食品/酒', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c3a0', name: '酸奶', parent: '55196b3e0042a1db62223a0a'},
  {_id: '5523bc489294d58a8e06c3a1', name: '纯牛奶', parent: '55196b3e0042a1db62223a0a'},
  {_id: '5523bc489294d58a8e06c3a2', name: '进口牛奶', parent: '55196b3e0042a1db62223a0a'},
  {_id: '5523bc489294d58a8e06c3a3', name: '进口饼干', parent: '55196b3e0042a1db62223a0a'},
  {_id: '5523bc489294d58a8e06c3a4', name: '进口红酒', parent: '55196b3e0042a1db62223a0a'},

  {_id: '55196b3e0042a1db62223a0b', name: '大家电/生活电器', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c3a5', name: '平板电视', parent: '55196b3e0042a1db62223a0b'},
  {_id: '5523bc489294d58a8e06c3a6', name: '电饭煲', parent: '55196b3e0042a1db62223a0b'},
  {_id: '5523bc489294d58a8e06c3a7', name: '电烤箱', parent: '55196b3e0042a1db62223a0b'},
  {_id: '5523bc489294d58a8e06c3a8', name: '饮水机', parent: '55196b3e0042a1db62223a0b'},
  {_id: '5523bc489294d58a8e06c3a9', name: '微波炉', parent: '55196b3e0042a1db62223a0b'},

  {_id: '55196b3e0042a1db62223a0c', name: '家具建材', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c3aa', name: '茶几', parent: '55196b3e0042a1db62223a0c'},
  {_id: '5523bc489294d58a8e06c3ab', name: '餐桌椅', parent: '55196b3e0042a1db62223a0c'},
  {_id: '5523bc489294d58a8e06c3ac', name: '户外家具', parent: '55196b3e0042a1db62223a0c'},
  {_id: '5523bc489294d58a8e06c3ad', name: '衣帽架', parent: '55196b3e0042a1db62223a0c'},
  {_id: '5523bc489294d58a8e06c3ae', name: '书架', parent: '55196b3e0042a1db62223a0c'},

  {_id: '55196b3e0042a1db62223a0d', name: '珠宝饰品/腕表眼镜', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c3af', name: '女士腕表', parent: '55196b3e0042a1db62223a0d'},
  {_id: '5523bc489294d58a8e06c3b0', name: '情侣表', parent: '55196b3e0042a1db62223a0d'},
  {_id: '5523bc489294d58a8e06c3b1', name: '潮人眼镜', parent: '55196b3e0042a1db62223a0d'},
  {_id: '5523bc489294d58a8e06c3b2', name: '瑞士名表', parent: '55196b3e0042a1db62223a0d'},
  {_id: '5523bc489294d58a8e06c3b3', name: '项链', parent: '55196b3e0042a1db62223a0d'},

  {_id: '55196b3e0042a1db62223a0e', name: '家纺/家饰/鲜花', parent: '55196b3e0042a1db62203a0a'},
  {_id: '5523bc489294d58a8e06c3b4', name: '浴室垫', parent: '55196b3e0042a1db62223a0e'},
  {_id: '5523bc489294d58a8e06c3b5', name: '床垫', parent: '55196b3e0042a1db62223a0e'},
  {_id: '5523bc489294d58a8e06c3b6', name: '钢琴', parent: '55196b3e0042a1db62223a0e'},
  {_id: '5523bc489294d58a8e06c3b7', name: '沙发套', parent: '55196b3e0042a1db62223a0e'},
  {_id: '5523bc489294d58a8e06c3b8', name: '四件套', parent: '55196b3e0042a1db62223a0e'}

];

module.exports = categories;