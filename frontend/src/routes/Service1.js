import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Service.css";
import swal from "sweetalert"
export default class Service1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Lawyers: [],
            login: ""
        };
    }

    componentDidMount() {
        const log = localStorage.getItem("logIn");
        this.setState.login = log;
        axios.get('/lawyers')
            .then(result => {
                const Lawyers = result.data;
                this.setState({ Lawyers });
            });
    }

    deleteLawyer(lawyer_Id) {
        let login = localStorage.getItem("logIn");
        if (login == "authenticatedADMIN") {
            console.log("inside deleteHandler")
            axios.delete(`/api/delete/${lawyer_Id}`)
                .then(res => {
                    const Lawyers = this.state.Lawyers.filter(item => item.lawyer_Id !== lawyer_Id);
                    this.setState({ Lawyers });

                })
        }
        else { swal("YOU ARE NOT ADMAI !!") }
    }

    render() {
        const MyLawyers = this.state.Lawyers.filter(item => item.service == 'Solutions');

        return (
            <div>
                <br />
                <br />
                <br />
                <div class="box">
                    {MyLawyers.map((item => (
                        <div class="cardSer">
                            <div key={item.lawyer_Id} className='row' padding="20px" >
                                <div class="card-wrapper">
                                    <div class="card">
                                        <img style={{ height: '100px', width: '100%' }} src={item.img} />
                                        <br />
                                        <br />
                                        <br />
                                        <div class="details">
                                            <h2> {item.lawyer_Name}</h2>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill-rule="evenodd" d="M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 6H2.353a.75.75 0 100 1.5H3.93L.563 15.18a.762.762 0 00.21.88c.08.064.161.125.309.221.186.121.452.278.792.433.68.311 1.662.62 2.876.62a6.919 6.919 0 002.876-.62c.34-.155.606-.312.792-.433.15-.097.23-.158.31-.223a.75.75 0 00.209-.878L5.569 7.5h.886c.351 0 .694-.106.984-.303l1.696-1.154A.25.25 0 019.275 6h1.975v14.5H6.763a.75.75 0 000 1.5h10.474a.75.75 0 000-1.5H12.75V6h1.974c.05 0 .1.015.14.043l1.697 1.154c.29.197.633.303.984.303h.886l-3.368 7.68a.75.75 0 00.23.896c.012.009 0 0 .002 0a3.154 3.154 0 00.31.206c.185.112.45.256.79.4a7.343 7.343 0 002.855.568 7.343 7.343 0 002.856-.569c.338-.143.604-.287.79-.399a3.5 3.5 0 00.31-.206.75.75 0 00.23-.896L20.07 7.5h1.578a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.697-1.154a1.75 1.75 0 00-.984-.303H12.75V2.75zM2.193 15.198a5.418 5.418 0 002.557.635 5.418 5.418 0 002.557-.635L4.75 9.368l-2.557 5.83zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.846 5.846 0 002.547-.576L19.25 9.367l-2.547 5.807z">
                                                </path>
                                            </svg>
                                            <h3>{item.service}</h3>
                                            <br />
                                            <Link to={`/Info/${item.lawyer_Id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path><path fill-rule="evenodd" d="M12 3.5c-3.432 0-6.125 1.534-8.054 3.24C2.02 8.445.814 10.352.33 11.202a1.6 1.6 0 000 1.598c.484.85 1.69 2.758 3.616 4.46C5.876 18.966 8.568 20.5 12 20.5c3.432 0 6.125-1.534 8.054-3.24 1.926-1.704 3.132-3.611 3.616-4.461a1.6 1.6 0 000-1.598c-.484-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5zM1.633 11.945c.441-.774 1.551-2.528 3.307-4.08C6.69 6.314 9.045 5 12 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.111.111 0 01.017.056.111.111 0 01-.017.056c-.441.774-1.551 2.527-3.307 4.08C17.31 17.685 14.955 19 12 19c-2.955 0-5.309-1.315-7.06-2.864-1.756-1.553-2.866-3.306-3.307-4.08A.11.11 0 011.616 12a.11.11 0 01.017-.055z">
                                                </path>
                                                </svg>
                                            </Link>
                                            {this.setState.login == "authenticatedADMIN" &&
                                                <button type="button" class="btn btn-outline" onClick={(e) => this.deleteLawyer(item.lawyer_Id, e)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12">
                                                        <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    )))
                    }
                </div>
            </div>
        );
    }

}
