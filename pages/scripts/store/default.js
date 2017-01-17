var defaultDatas = {
  '/login': {
    "user_id": 3,
    "username": "admin",
    "role": "员工",
    "accumulate": null,
    "consume": null
  },
  '/user/info': {
    currentMonth: '十月',
    userInfo: {
      name: '张三',
      id: 123,
      department: '市场部',
      role: '员工',
      quota: 100,
      previousDeposit: 200,
      currentDeposit: 1000,
      cumulativeRank: 230,
      exchangedRank: 100,
      remainRank: 130,
    }
  },
  '/goods/list': {
    totalPages: 6,
    lists: [
      {
        id: 0,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '吹风机一台',
        rank: 400
      },
      {
        id: 1,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '榨汁机',
        rank: 1000
      },
      {
        id: 2,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '电视机',
        rank: 2000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/H-G1WkheNeZAPgQtCW9EVw==/6631783547771508070.jpg_188x188x1.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/YO-FLITAd7LOJ9xc561hUA==/6631867110652867849.jpg_230x230x1x95.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/ANBTGBiBCvJrZBuBdI9WVg==/6631902295024986172.jpg_230x230x1x95.jpg',
        name: '空调',
        rank: 4000
      },
      {
        id: 3,
        imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/QilZpaHhnNhRo_yIy8OsSQ==/6631820931167577129.jpg_230x230x1x95.jpg',
        name: '空调',
        rank: 4000
      }
    ]
  },
  'goodsArray': [
    {
      id: 0,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '吹风机一台',
      rank: 400
    },
    {
      id: 1,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '榨汁机',
      rank: 1000
    },
    {
      id: 2,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '电视机',
      rank: 2000
    },
    {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '空调',
      rank: 4000
    },
    {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '空调',
      rank: 4000
    },
    {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '空调',
      rank: 4000
    }
  ],
  staffExchangeRecards: [
    {
      name: '洗衣机',
      id: 1234,
      rank: 2000,
      isConfirm: true,
    },
    {
      name: '电视机',
      id: 1234,
      rank: 1000,
      isConfirm: false,
    },
    {
      name: '手机',
      id: 1234,
      rank: 400,
      isConfirm: true,
    }
  ],
  staffs: [
    {
      name: '张三',
      id: 123,
      department: '市场部',
      role: '员工',
      quota: 100,
      previousDeposit: 200,
      currentDeposit: 1000,
      cumulativeRank: 230,
      exchangedRank: 100,
      remainRank: 130,
      convertibleGoods: '冰箱 洗发露'
    },
    {
      name: '美国队长',
      id: 1234,
      department: '市场部',
      role: '员工',
      quota: 100,
      previousDeposit: 200,
      currentDeposit: 1000,
      cumulativeRank: 2130,
      exchangedRank: 100,
      remainRank: 2030,
      convertibleGoods: '冰箱 洗发露'
    }
  ],
  exchangeHistoryList: [
    {
      name: '微波炉',
      rank: 1000,
    },
    {
      name: '榨汁机',
      rank: 2000,
    },
    {
      name: '冰箱',
      rank: 3000,
    }
  ],
  goodsArray: [
    {
      id: 12313,
      name: '菜籽油',
      rank: '100',
      image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
    },
    {
      id: 12314,
      name: '电视机',
      rank: '2000',
      image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
    },
    {
      id: 12315,
      name: '笔记本',
      rank: '2000',
      image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
    },
  ]
}