class Todo extends React.Component {
    render() {
        let checked = (this.props.done == "true");
        return <div className="todo">
            <span>
                <input type="checkbox" checked={checked} />
                <input type="text" value={this.props.next} />
            </span>
        </div>;
    }
}

ReactDOM.render(
    <Todo name="Todo 1" done="false" />,
    document.getElementById('root')
);