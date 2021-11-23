var APP_DATA = {
  "scenes": [
    {
      "id": "0-sn-l-hi",
      "name": "Sân Lễ Hội",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.15518247173130462,
        "pitch": 0.09047675338298156,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.002334183024169434,
          "pitch": -0.07666699518563291,
          "rotation": 0,
          "target": "1-cng-sn-nh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cng-sn-nh",
      "name": "Cổng Sân Đình",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 3.0272605241785078,
          "pitch": -0.05745457430341716,
          "rotation": 0,
          "target": "0-sn-l-hi"
        },
        {
          "yaw": -0.20051949062118446,
          "pitch": 0.011546054311263987,
          "rotation": 0,
          "target": "2-sn-nh-c-loa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sn-nh-c-loa",
      "name": "Sân Đình Cổ Loa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.09190302022159713,
        "pitch": -0.07017603205902923,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 3.061457311818973,
          "pitch": -0.05245381208597699,
          "rotation": 0,
          "target": "1-cng-sn-nh"
        },
        {
          "yaw": -1.4355718380047549,
          "pitch": -0.0844017794274361,
          "rotation": 0,
          "target": "3-am-th-m-chu"
        },
        {
          "yaw": -0.6242497042252158,
          "pitch": -0.11811774400250385,
          "rotation": 0,
          "target": "6-cha-bo-sn"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.16937378498307964,
          "pitch": -0.22359285444196786,
          "title": "Ngự Triều Di Quy",
          "text": "",
          "popup": "tiles/pop-up/ngu-trieu-di-quy.png"
        }
      ]
    },
    {
      "id": "3-am-th-m-chu",
      "name": "Am Thờ Mỵ Châu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.5225888395384786,
        "pitch": -0.05448085222634447,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.6597583072385529,
          "pitch": 0.15123907519572555,
          "rotation": 0,
          "target": "2-sn-nh-c-loa"
        },
        {
          "yaw": -2.8416891209695905,
          "pitch": -0.03632202594932821,
          "rotation": 0,
          "target": "4-ban-th-b-quan-vn-v"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6653421009989628,
          "pitch": 0.3221534588620294,
          "title": "Cổng Vòm",
          "text": "",
          "popup": "tiles/pop-up/cong-vom.png"
        },
        {
          "yaw": -2.5268662717793813,
          "pitch": -0.041101363874236796,
          "title": "Am Thờ Mỵ Châu",
          "text": "Khu am thờ là một kiến trúc gồm 2 phần chính. Tiền tế là một ngôi nhà được xây dựng bằng gỗ 3 gian, tường hồi bít đốc, mái lợp ngói ta. Các bộ vì được làm theo kiểu “thượng giá chiêng, hạ chồng rường, kẻ bẩy”. Tất cả các cấu kiện đều không có chạm khắc hoa văn gì mà chỉ bào soi. Kiến trúc này có niên đại muộn (cuối thế kỷ XIX đầu thế kỷ XX). Trên thượng lương có dòng chữ Hán ghi rõ niên đại tu bổ: Việt Nam dân chủ cộng hoà, tuế thứ Quý Sửu (1973). Hậu cung là 1 toà nhà xoay dọc, kết cấu chịu lực chính là các bức tường xây bao 3 mặt chỉ để 2 cửa bên thông với tiền tế."
        }
      ]
    },
    {
      "id": "4-ban-th-b-quan-vn-v",
      "name": "Ban Thờ Bá Quan Văn Võ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.8743932784181636,
        "pitch": -0.003968880634843686,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.47021207807238596,
          "pitch": 0.03715164300058227,
          "rotation": 0,
          "target": "3-am-th-m-chu"
        },
        {
          "yaw": -2.253496309077317,
          "pitch": 0.07470543639646365,
          "rotation": 4.71238898038469,
          "target": "5-ban-th-m-chu"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0780252628834077,
          "pitch": -0.19178425084866646,
          "title": "Ban Thờ \"Thập Nhị Cô\"",
          "text": "Ban thờ \"thập nhị cô\" - những người hầu cận của công chúa. Có câu đối trên trụ 2 bên ban thờ: Thiên tải thượng thị gia phi thùy năng biệt chi quy chảo nỗ cơ truyền ngoại sử; ngũ luân chung phụ giữ phu quả thục dân giã bạng khai tỉnh thủy đội thâm tình (ngàn năm đã qua cái đúng cái sai ai có thể biện minh được, cái móng rùa làm nẫy nỏ thần thì cũng chỉ là truyền thuyết; trong ngũ luân, cha và chồng ai là người thân hơn chỉ có ngọc trai và nước giếng ngọc mới chứng tỏ được thôi."
        }
      ]
    },
    {
      "id": "5-ban-th-m-chu",
      "name": "Ban Thờ Mỵ Châu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.4695048258233783,
        "pitch": 0.17653452728295704,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -2.2813602313945527,
          "pitch": 0.15915852521271745,
          "rotation": 0,
          "target": "4-ban-th-b-quan-vn-v"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8157864110833444,
          "pitch": -0.06965139368698914,
          "title": "Bức Tượng Không Đầu Công Chúa Mỵ Châu",
          "text": "",
          "popup": "tiles/pop-up/tuong-da.png"
        }
      ]
    },
    {
      "id": "6-cha-bo-sn",
      "name": "Chùa Bảo Sơn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1927886493212814,
          "pitch": -0.04081789431620564,
          "rotation": 0,
          "target": "2-sn-nh-c-loa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
