import React, { Component } from "react";
import { withRouter  } from "react-router-dom";

class CreateTask extends Component {
    state = {
        tasks: [],
    };

    createTask = (task) => {
        var tasks = localStorage.getItem("tasks");

        var tasksobj = JSON.parse(tasks);
    
        if (tasksobj == null) {
            tasksobj = [];
        }

        var newtask = {
            id: tasksobj.length + 1,
            name: task,
        };
        tasksobj.push(newtask);
        localStorage.setItem("tasks", JSON.stringify(tasksobj));
        

    };

    render() {
        return (
            <div className="container">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        this.createTask(this.task.value);
                        this.props.history.push('/list-task');
                    }}
                >
                    <input
                        id="newTask"
                        ref={(input) => {
                            this.task = input;
                        }}
                        type="text"
                        className="form-control mt-5"
                        placeholder="Add task..."
                        required
                    />
                    <input type="submit" className="btn btn-primary mt-2" value="Create Task" />
                </form>
            </div>
        );
    }
}


export default withRouter (CreateTask);