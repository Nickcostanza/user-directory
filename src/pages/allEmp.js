import React, { Component } from 'react';
import API from '../utils/API';
import Card from '../components/Card';
import Row from '../components/Row';
import Container from '../components/Container';
import Column from '../components/Column';
import './style.css';


class Allemp extends Component {
    state = {
        allResults: [],
        allResultsParsed: [],
        results: []
    };

    componentDidMount() {
        API.findPeople().then(res => {
            this.setState({
                allResults: res.data.results,
                allResultsParsed: res.data.results,
                results: res.data.results
            })
        })
    }
    //search firstname
    handleSearchFN = (event) => {
        const queryFN = event.target.value;
        this.sortPeopleFN(queryFN);
    }
    //search lastname
    handleSearchLN = (event) => {
        const queryLN = event.target.value;
        this.sortPeopleLN(queryLN);
    }

    //function sorting by firstname
    sortPeopleFN = (value) => {
        let searchResults = this.state.allResults.filter((x) => {
            return x.name.first.toLowerCase().includes(value);
        })
        this.setState({
            allResultsParsed: searchResults
        })
    }

    //function sorting by lastname
    sortPeopleLN = (value) => {
        let searchResults = this.state.allResults.filter((x) => {
            return x.name.last.toLowerCase().includes(value)
        })
        this.setState({
            allResultsParsed: searchResults
        })
    }

    render() {
        const results = this.state.allResultsParsed;

        return(
            <div>
                <h1 className='text-center'> Employee Directory</h1>
                <form className='search-form form-inline'>
                    <div>
                        <input className='employeeSearch' placeholder='Search by Employees First Name' onChange={this.handleSearchFN} />
                        <input className='employeeSearch' placeholder='Search by Employees Last Name' onChange={this.handleSearchLN} />
                    </div>
                </form>
                <Container>
                    <Row>
                        {
                            results.map((employees, i) => (
                                <Column key={i}>
                                    <Card
                                    image={employees.picture.large}
                                    firstName={employees.name.first}
                                    lastName={employees.name.last}
                                    fullName={employees.name.first + employees.name.last}
                                    age={employees.dob.age}
                                    phoneNum={employees.phone}
                                    email={employees.email}
                                    />
                                </Column>
                            ))
                        }
                    </Row>
                </Container>
            </div>

        )
    }

}

export default Allemp;