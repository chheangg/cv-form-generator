/* eslint-disable no-useless-constructor */
import React from 'react';
import Form from './CV-Forms/form';
import Preview from './CV-Preview/preview'
import './styles/main.scss';
import uniqid from 'uniqid';

function getAge(input) {
  const date = input.split('-');
  const today = new Date(Date.now());
  const dob = new Date(date[0], date[1], date[2]);
  const diff = today.getFullYear() - dob.getFullYear();
  const age = (today.getMonth() - dob.getMonth()) < 0 ? diff - 1 : diff; 
  return age;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
    this.createList = this.createList.bind(this);
    this.updateFieldList = this.updateFieldList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.state = {
      generalInfo: {
        firstName: '',
        secondName: '',
        title: '',
        age: '',
        email: '',
        contact: '',
        address: '',
      },
      briefInfo: ``,
      practicalInfo: [],
      educationInfo: [],
      utility: {
        updateField: this.updateField,
        createList: this.createList,
        updateList: this.updateFieldList,
        deleteList: this.deleteList,
      }
    }
  }

  deleteList(box) {
    let newArr;
    if (box.target.className === 'education-input') {
      newArr = this.state.educationInfo.filter(x => x.key !== box.target.dataset.key);
      this.setState({
        educationInfo: newArr,
      })
    }
    if (box.target.className === 'practical-input') {
      newArr = this.state.practicalInfo.filter(x => x.key !== box.target.dataset.key);
      this.setState({
        practicalInfo: newArr,
      })
    }
  }

  updateFieldList(input) {
    let targetList;
    let target;
    this.setState((prevState) => {
      if (input.target.className === 'education-input') {
        targetList = this.state.educationInfo.filter(x => x.key === input.target.dataset.key)[0];
        target = prevState.educationInfo
      }
      if (input.target.className === 'practical-input') {
        targetList = this.state.practicalInfo.filter(x => x.key === input.target.dataset.key)[0];
        target = prevState.practicalInfo;
      }
      switch (input.target.id) {
        case 'name':
          targetList.name = input.target.value;
          break;
        case 'role':
          targetList.role = input.target.value;
          break;
        case 'from':
          const dateFrom = new Date(input.target.value)
          targetList.from = dateFrom.getFullYear();
          break;
        case 'to':
          const dateTo = new Date(input.target.value)
          targetList.to = dateTo.getFullYear();
          break;
        default:
          break;
      }
    return {
      target: [...target.filter(x => x.key !== input.target.dataset.key), targetList]
    }
    })
  }

  createList(box) {
    const newState = {
      name: '',
      role: '',
      to: '',
      from: '',
      key: uniqid(),
    }
    switch (box.target.id) {
      case 'edu-list':
        this.setState((prevState) => {
          return {
            educationInfo: [...prevState.educationInfo, newState ],
          }
        })
        break;
      case 'prac-list':
        this.setState((prevState) => {
          return {
            practicalInfo: [...prevState.practicalInfo, newState ],
          }
        })
        break;
      default:
        break;
    }
  }

  updateField(input) {
    this.setState((prevState) => {
      switch (input.target.id) {
        case 'first-name':
          prevState.generalInfo.firstName = input.target.value;
          break;
        case 'last-name':
          prevState.generalInfo.lastName = input.target.value;  
          break; 
        case 'title':
          prevState.generalInfo.title = input.target.value;  
          break;
        case 'email':
          prevState.generalInfo.email = input.target.value;  
          break;
        case 'phone-number':
          prevState.generalInfo.contact = input.target.value;  
          break;
        case 'address':
          prevState.generalInfo.address = input.target.value;  
          break;
        case 'dob':
          prevState.generalInfo.age = getAge(input.target.value);
          break;
        case 'text-field':
          prevState.briefInfo = input.target.value;  
          break;
        default:
          break;
      }
      return {
        state: prevState,
      }
    })
  }

  render() {
    const {generalInfo, briefInfo, educationInfo, practicalInfo, utility} = this.state
    return (
      <main className='main-content'>
        <Form utility={utility}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
        />
        <Preview 
          generalInfo={generalInfo}
          briefInfo={briefInfo}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
        /> 
      </main>
    )
  }
}

export default Main;