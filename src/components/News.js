import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    static defaultProps = {
        country:"in",
        category:'general'
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7311fddd6fa428b9b66a7ec11e047ef&page=1`;
        let data = await fetch(url);

        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })


    }

    handleNext= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.prop.country}&category=${this.prop.category}&apiKey=e7311fddd6fa428b9b66a7ec11e047ef&page=${this.state.page+1}`;
        let data = await fetch(url);

        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles,
        page:this.state.page+1 })

    }
    handlePrev= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.prop.country}&category=${this.prop.category}&apiKey=e7311fddd6fa428b9b66a7ec11e047ef&page=${this.state.page-1}`;
        let data = await fetch(url);

        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles,
        page:this.state.page-1 })

    }
    render() {
        return (
            <div className="container">
                <h1>News - Top Head Lines</h1>
                <div className="row my-3">
                    {this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-4"><Newsitem key={element.url} title={element.title ? element.title : ''} url={element.urlToImage ? element.urlToImage : 'https://s.yimg.com/uu/api/res/1.2/.yQDkhNNLImE_MVrLDz8qw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/60dda460-a631-11ed-9d77-eb0e8047f441.cf.jpg'} description={element.description ? element.description : ''} /></div>
                    })}

                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-secondary" onClick={this.handlePrev}>Prev</button>
                    <button type="button" class="btn btn-secondary" onClick={this.handleNext}>Next</button>
                </div>
            </div>
        )
    }
}
