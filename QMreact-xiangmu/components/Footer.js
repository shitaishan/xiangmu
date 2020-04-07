import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom"
import asyncComponents from  "../components/asyncComponents"
import "../assets/css/footer.css"
const HomeComponent=asyncComponents(()=>import("../views/Home/Home"))
const CategoryComponent=asyncComponents(()=>import("../views/Category/Category"))
const CartComponent=asyncComponents(()=>import("../views/Cart/Cart"))
const MineComponent=asyncComponents(()=>import("../views/Mine/Mine"))
class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
            activeHome:true,
            activeCategory:false,
            activeCart:false,
            activeMine:false,
        }
    }
    handfooter=(props)=>{
        switch(props.location.pathname) {
            case "/api/home":
                this.setState({
                    activeHome:true,
                    activeCategory:false,
                    activeCart:false,
                    activeMine:false,
                })
                break;
            case "/api/category":
                this.setState({
                    activeHome:false,
                    activeCategory:true,
                    activeCart:false,
                    activeMine:false,
                })
                break; 
            case "/api/cart":
                this.setState({
                    activeHome:false,
                    activeCategory:false,
                    activeCart:true,
                    activeMine:false,
                })
                break;
            case "/api/mine":
                this.setState({
                    activeHome:false,
                    activeCategory:false,
                    activeCart:false,
                    activeMine:true,
                })
                break;              
            }
        }
    componentWillMount(){
        this.handfooter(this.props)
    }
    componentWillReceiveProps(newprops){//父子组件传值，父组件修改通过props传的值时触发
        this.handfooter(newprops)
    }
    gopage=(componentUrl)=>{
        this.props.history.replace(componentUrl)
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={"/api/home"} component={HomeComponent}></Route>
                        <Route path={"/api/category"} component={CategoryComponent}></Route>
                        <Route path={"/api/cart"} component={CartComponent}></Route>
                        <Route path={"/api/mine"} component={MineComponent}></Route>
                    </Switch>
                </React.Fragment>
                <div className="footer">
                    <ul onClick={this.gopage.bind(this,"/api/home")}>
                        <li className={this.state.activeHome?"home-action":"home"}></li>
                        <li className={this.state.activeHome?"text-action":"text"}>首页</li>
                    </ul>
                    <ul onClick={this.gopage.bind(this,"/api/category")}>
                        <li className={this.state.activeCategory?"category-action":"category"}></li>
                        <li className={this.state.activeCategory?"text-action":"text"}>分类</li>
                    </ul>
                    <ul onClick={this.gopage.bind(this,"/api/cart")}>
                        <li className={this.state.activeCart?"cart-action":"cart"}></li>
                        <li className={this.state.activeCart?"text-action":"text"}>购物车</li>
                    </ul>
                    <ul onClick={this.gopage.bind(this,"/api/mine")}>
                        <li className={this.state.activeMine?"mine-action":"mine"}></li>
                        <li className={this.state.activeMine?"text-action":"text"}>我的</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;