import React, { Component } from 'react';
import "../../assets/css/home.css"
import Swiper from "swiper"
import "../../assets/css/swiper.min.css"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerLists: [{
                id: 1,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }, {
                id: 2,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }, {
                id: 3,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }],
            homeProductlist: [{
                "product_id": 1,
                "category_id": 1,
                "product_name": "小米无线鼠标",
                "product_price": 5999,
                "product_dprice": 6999,
                "product_img_url": "https://x.dscmall.cn/storage/images/201809/thumb_img/450_thumb_G_1577297848675.jpg",
                "product_num": 99999,
                "product_detail": "平板电视详情信息",
                "bannerimg": [{
                    "image_id": 1,
                    "image_url": " https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536614559253.jpg"
                }, {
                    "image_id": 2,
                    "image_url": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169281344.jpg"
                }]
            },
            {
                "product_id": 2,
                "category_id": 1,
                "product_name": "笔记本",
                "product_price": 3000,
                "product_dprice": 2000,
                "product_img_url": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536532838054.jpg",
                "product_num": 99,
                "product_detail": "冰箱详情",
                "bannerimg": [{
                    "image_id": 1,
                    "image_url": "https://x.dscmall.cn/storage/images/201809/goods_img/1075_P_1577297848663.jpg"
                }, {
                    "image_id": 2,
                    "image_url": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536614610499.jpg"
                }]
            },
            {
                "product_id": 3,
                "category_id": 2,
                "product_name": "华为手机",
                "product_price": 59,
                "product_dprice": 69,
                "product_img_url": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108567732.jpg",
                "product_num": 999,
                "product_detail": "古典音乐图书详情",
                "bannerimg": [{
                    "image_id": 1,
                    "image_url": " https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536614559253.jpg"
                }, {
                    "image_id": 2,
                    "image_url": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169281344.jpg"
                }]
            },
            {
                "product_id": 4,
                "category_id": 2,
                "product_name": "oppo手机",
                "product_price": 39,
                "product_dprice": 46,
                "product_img_url": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536614559343.jpg",
                "product_num": 900,
                "product_detail": "摇滚说唱",
                "bannerimg": [{
                    "image_id": 1,
                    "image_url": "https://x.dscmall.cn/storage/images/201809/goods_img/1075_P_1577297848663.jpg"
                }, {
                    "image_id": 2,
                    "image_url": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536614610499.jpg"
                }]
            }
            ]
        }
    }
    componentDidMount() {
        this.getBanner()
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    render() {
        return (
            <div className="page">
                {/* 标题 */}
                <header className="home-header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">蓝果小镇</div>
                    <a>。。。</a>
                </header>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={banner.imgsrc} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 商品列表 */}
                <div className="home-product-list">
                    <ul>
                        {
                            this.state.homeProductlist.map((product, index) => {
                                return (
                                    <li key={index}>
                                        <img src={product.product_img_url}></img>
                                        <h3>{product.product_name}</h3>
                                        <div className="price">
                                            <p>{product.product_price}</p>
                                            <p>{product.product_dprice}</p>
                                        </div>
                                        <div className="info">
                                            <p>新品</p>
                                            <p>销量：0</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;