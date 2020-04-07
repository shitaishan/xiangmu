import React, { Component } from 'react';

export default function asyncComponent(importComponent){
    class AsyncComponents extends Component {
        constructor(props){
            super(props)
            this.state={
                componentData:null
            }
        }
        async componentDidMount(){
            const {default:component}=await importComponent()
            this.setState({
                componentData:component
            })
            
        }
        render() {
            const C=this.state.componentData
            return C?<C{...this.props}/>:null
        }
    }
    return AsyncComponents
};