import React, { Component } from 'react';
import "../../assets/css/mine.css"
class Mine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgurl: require("../../assets/images/common/1.jpeg")
        }
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <header className="mine-header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">个人中心</div>
                    <a>。。。</a>
                </header>
                <div>
                    <div className="mine-logo">
                        <div className="img">
                            <img src={this.state.imgurl} alt=""></img>
                        </div>
                        <p>寒星晓月</p>
                    </div>
                    <div className="info">
                        <div className="list">
                            <p>全部订单</p>
                            <i>查看全部订单 <a className="iconfont icon-jiantou"></a></i>
                        </div>
                        <div className="lists">
                            <div className="item">
                                <i className="iconfont icon-cart1"></i>
                                <p>待付款<span>(0)</span></p>
                            </div>
                            <div className="item">
                                <i className="iconfont icon-cart1"></i>
                                <p>待收货<span>(0)</span></p>
                            </div>
                            <div className="item">
                                <i className="iconfont icon-cart1"></i>
                                <p>已完成<span>(0)</span></p>
                            </div>
                            <div className="item">
                                <i className="iconfont icon-cart1"></i>
                                <p>售后<span>(0)</span></p>
                            </div>
                        </div>
                        <div className="list">
                            <p>地址管理</p>
                            <i className="iconfont icon-jiantou"></i>
                        </div>
                        <div className="list">
                            <p>优惠券</p>
                            <i className="iconfont icon-jiantou"></i>
                        </div>
                        <div className="list">
                            <p>联系客服</p>
                            <i className="iconfont icon-jiantou"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mine;