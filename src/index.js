import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
  
const posts = [
        {id: 1, name: 'Коля', lastName: 'Иванов', day: '', salaryDay: ''},
        {id: 2, name: 'Вася', lastName: 'Сидоров', day: 20, salaryDay: 90},
        {id: 3, name: 'Петя', lastName: 'Петров', day: 21, salaryDay: 70},
    ];


function SumSalary(props) {
    if (props.idD===props.idS) {
      return <td id={props.idD}>SumSalary this Worker = {props.workedDay * props.salaryDay} grn</td>;      
    }
    console.log('props', props)
    return <p>Input Namber in field Day and Salary for one Worker</p>;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.inputDay = this.inputDay.bind(this);
    this.inputSalaryDay = this.inputSalaryDay.bind(this);
    this.state = {
      days: '',
      salary: ''
    };
  }

  inputDay(e) { 
      console.log('inputDay', e.target.id)
    this.setState({idD: e.target.id});
    this.setState({days: e.target.value});
  }
  inputSalaryDay(e) {
    console.log('inputSalaryDay', e.target.id)
    this.setState({idS: e.target.id});
    this.setState({salary: e.target.value,});
  }

  render() {
    const days = this.state.days;
    const salary = this.state.salary;
    const idD = this.state.idD;
    const idS = this.state.idS;
    
    return (
      <fieldset>
        <legend>List Workers:</legend>
        <form>
          {posts.map((post, index) =>
              <tr id={index} key={index}>
                  <td id={index}>
                      {index+1}
                  </td>
                  <td id={index} style={{padding: 5 +'px'}}>
                      {post.name}         
                  </td>
                  <td id={index} style={{padding: 5 +'px'}}>
                      {post.lastName}
                  </td>  
                  <td id={index} style={{padding: 5 +'px'}}> Days
                  <input id={index}
                      onChange={this.inputDay} />
                  </td>
                  <td id={index} style={{padding: 5 +'px'}}> Salary
                  <input id={index}
                      onChange={this.inputSalaryDay} />
                  </td>
              </tr>
          )}
        </form>       
        <SumSalary
          workedDay={parseFloat(days)} 
          salaryDay={parseFloat(salary)}
          idD={parseFloat(idD)}
          idS={parseFloat(idS)}
        />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}   
    {/* <Workers posts={posts}/> */}
    <List />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
