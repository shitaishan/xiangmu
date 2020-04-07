import React, { Component } from 'react';
import "../../assets/css/cart.css"
class Cart extends Component {
    render() {
        return (
            <div>
                {/* 标题 */}
                <header className="cart-header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">个人中心</div>
                    <a>。。。</a>
                </header>
            </div>
        );
    }
}

export default Cart;