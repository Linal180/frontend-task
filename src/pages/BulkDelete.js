/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter  } from "react-router-dom";

class BulkDelete extends Component {
    constructor() {
        super();
        this.state = {
            hobbies: [],
            tasks: [],
            checkedItems: new Map(),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const tasks = localStorage.getItem("tasks");
        if (tasks != null) {
            var tasksobj = JSON.parse(tasks);

            this.setState({ tasks: tasksobj });
        }
    }
    handleChange(event) {
        var isChecked = event.target.checked;
        var item = event.target.value;

        this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    handleSubmit(event) {
        const checkid = [];
        Array.from(this.state.checkedItems.entries()).map(([key, val]) => {
            if (val == true) {
                checkid.push(key);
            }
        });
        var newtasks = [];
        this.state.tasks.map((task) => {
            var fond = checkid.find(function (element) {
                return task.id == element;
            });
            if (fond == undefined) {
                newtasks.push(task);
            }
        });
        localStorage.setItem("tasks", JSON.stringify(newtasks));
        event.preventDefault();
        this.props.history.push('/list-task');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    {this.state.tasks.map((task) => {
                        return (
                            <div class="form-check mt-3">
                                <input
                                    class="form-check-input"
                                    onChange={this.handleChange}
                                    type="checkbox"
                                    id={task.id}
                                    value={task.id}
                                />
                                <label class="form-check-label" for={task.id}>
                                    {task.name}
                                </label>
                            </div>
                        );
                    })}
                    <br />
                    <input type="submit" value="Delete" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default withRouter (BulkDelete);