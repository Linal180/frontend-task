/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListTask extends Component {
    state = {
        tasks: [],
    };

    componentDidMount() {
        const tasks = localStorage.getItem("tasks");
        if (tasks != null) {
            var tasksobj = JSON.parse(tasks);

            this.setState({ tasks: tasksobj });
        }
    }

    render() {
        return (
            <div className="container">
                <a className="btn btn-primary mt-4" href="/create-task" role="button">Create Task</a>
                <a className="btn btn-primary mt-4 ml-2" href="/bulk-delete" role="button">Delete Task</a>
                {this.state.tasks.map((task) => {
                    return (
                        <div class="card mt-3">
                            <div class="card-body">{task.name}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
