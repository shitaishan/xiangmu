import React, { Component } from 'react';
import "../../assets/css/category.css"
import Iscroll from "iscroll"
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorylist: [{
                "id": 1,
                "name": "手机",
                "list": [{
                    "id": 101,
                    "name": "小米"
                }, {
                    "id": 102,
                    "name": "红米"
                }, {
                    "id": 103,
                    "name": "平板"
                }]
            },
            {
                "id": 2,
                "name": "笔记本"
            }, {
                "id": 3,
                "name": "智能硬件"
            }, {
                "id": 4,
                "name": "周边配件"
            },
            {
                "id": 5,
                "name": "笔记本"
            }, {
                "id": 6,
                "name": "智能硬件"
            }, {
                "id": 7,
                "name": "周边配件"
            },
            {
                "id": 8,
                "name": "笔记本"
            }, {
                "id": 9,
                "name": "智能硬件"
            }, {
                "id": 10,
                "name": "周边配件"
            },
            {
                "id": 11,
                "name": "笔记本"
            }, {
                "id": 12,
                "name": "智能硬件"
            }, {
                "id": 13,
                "name": "周边配件"
            },
            {
                "id": 14,
                "name": "笔记本"
            }, {
                "id": 15,
                "name": "智能硬件"
            }, {
                "id": 16,
                "name": "周边配件"
            }],
            imgurl: require("../../assets/images/category/004.jpg")
        }
    }
    componentDidMount() {
        this.scrollleft()
    }
    scrollleft = () => {
        document.getElementById("scroll-left").addEventListener("touchmove", (e) => {
            e.preventDefault()
        }, false)
        new Iscroll("#scroll-left", {
            scrollX: false,
            scrollY: true,
            preventDefault: false
        })
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <header className="category-header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">分类</div>
                    <a>。。。</a>
                </header>
                <div className="categorymain">
                    <div className="category-left" id="scroll-left">
                        <ul className="cat-ul">
                            {
                                this.state.categorylist.map((list, key) => {
                                    return (
                                        <li key={key}>
                                            <a>{list.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="cate-right">
                        <div className="category">
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;