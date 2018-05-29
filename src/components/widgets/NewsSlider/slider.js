import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper } from '../../../firebase';

import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
      firebaseArticles.limitToFirst(3).once('value')
      .then((snap)=>{
        const news = firebaseLooper(snap)
        this.setState({
          news
        })
      })
    }

    render(){
      console.log(this.state)
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }

}

export default NewsSlider;
