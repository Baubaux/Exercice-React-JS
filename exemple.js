class App extends React.Component {

    state = {
        outflow: "",
        budget: []
    }

    handleChangeOutFlow = (event) => {
        console.log(event.target.value);

        this.setState({
            outflow: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const tmp = this.state.budget.concat(this.state.outflow);

        // ON NE PEUT PAS UTILISER DE .push dans un setState
        // Pareil qu'un = dans un this.state
        this.setState({
            budget: tmp,
            outflow: ""
        })


         /* Imaginons exemple:
        budget: []
        Une valeur dans le champ "422"
        Je veux cette valeur 422 dans le tableau

        ON PEUT PAS FAIRE DE .push
         tmp = this.state.budget.concat(this.state.outflow)
        tmp = [] + "422"
        tmp = ["422"]

        this.setState({budget: tmp})

        Maintenant budget: ["422"]
        
        --- 
        Nouvelle valeur: 289
        budget: ["422"]
        tmp = ["422"] + "289"
        tmp = ["422", "289"]
        Grâce au setState budget = ["422","289"]
        */
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.outflow}
                    onChange={this.handleChangeOutFlow}
                />
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));