class App extends React.Component {
    
    state = {
        name: "",
        comment: "",
        comments: []
    }

    handleChangeName = (event) => {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        })
    }
    
    handleChangeComment = (event) => {
        console.log(event.target.value);

        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const tmp = this.state.comments.concat({name: this.state.name}, {message: this.state.comment});

        this.setState({
            comments: tmp,
        })
    }

    render() {
        return(
            <div>
                <h1>Say something</h1>
                <form className="Form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />
                    <input type="textarea" placeholder="Your Comment"
                        value={this.state.comment}
                        onChange={this.handleChangeComment}
                    />
                    <input type="submit" value="Comment >"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));