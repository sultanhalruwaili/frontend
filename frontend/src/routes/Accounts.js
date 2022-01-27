import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert"

export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [],
        login: ""
    };
  }

  componentDidMount() {
    const log = localStorage.getItem("logIn");
    this.setState.login = log;
    axios.get("/api/users")
    .then(response => {
    const users=  response.data
    this.setState({users});
        });
}

deleteUser(email ,e) {
    let login = localStorage.getItem("logIn");
    if (login == "authenticatedADMIN") {
        console.log("inside deleteHandler")
        axios.delete(`/api/user/delete/${email}`)
        .then(res => {
            const users = this.state.users.filter(item => item.email !== email);
            this.setState({ users });
            })
    }
    else { swal("YOU ARE NOT ADMAI !!") }
}

        
  render() {
    return (
        
      <section class="profile">
          {this.setState.login == "authenticatedADMIN" &&
            <header class="header">
                <div class="details">
                    {this.state.users.map((item => (
                        <div key={item.email} className='row' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <br />
                            <h1 class="heading">{item.email}</h1>
                            <br />
                            <button type="button" class="btn btn-outline-m" onClick={(e) => this.deleteUser(item.email, e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12">
                               <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z">
                             </path>
                                 </svg>
                             </button>
                        </div>
                    )))
                    }
                </div>
            </header>
     }
        </section>
    );
  }
}