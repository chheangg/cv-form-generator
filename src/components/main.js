/* eslint-disable no-useless-constructor */
import React, {useState} from 'react';
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

function Main() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [describeInfo, setDescribeInfo] = useState('');
  const [educationInfo, setEducationInfo] = useState([]);
  const [practicalInfo, setPracticalInfo] = useState([]);

  const updateField = (input) => {
    switch (input.target.id) {
      case 'first-name':
        setFirstName(input.target.value);
        break;
      case 'last-name':
        setLastName(input.target.value);
        break; 
      case 'title':
        setTitle(input.target.value);
        break;
      case 'email':
        setEmail(input.target.value);
        break;
      case 'phone-number':
        setContact(input.target.value);
        break;
      case 'address':
        setAddress(input.target.value);
        break;
      case 'dob':
        setAge(getAge(input.target.value));
        break;
      case 'text-field':
        setDescribeInfo(input.target.value);
        break;
      default:
        break;
    }
  }

  const deleteList = (box) => {
    let newArr;
    if (box.target.className === 'education-input') {
      newArr = educationInfo.filter(x => x.key !== box.target.dataset.key);
      setEducationInfo(newArr);
    }
    if (box.target.className === 'practical-input') {
      newArr = practicalInfo.filter(x => x.key !== box.target.dataset.key);
      setPracticalInfo(newArr);
    } 
  }

  const updateList = (input) => {
    let targetList;
    let target;
    let list;
    if (input.target.className === 'education-input') {
      targetList = educationInfo.filter(x => x.key === input.target.dataset.key)[0];
      target = setEducationInfo;
      list = educationInfo;
    }
    if (input.target.className === 'practical-input') {
      targetList = practicalInfo.filter(x => x.key === input.target.dataset.key)[0];
      target = setPracticalInfo;
      list = practicalInfo;
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

    target([...list.filter(x => x.key !== input.target.dataset.key), targetList]);
  }

  const createList = (box) => {
    const newState = {
      name: '',
      role: '',
      to: '',
      from: '',
      key: uniqid(),
    }
    switch (box.target.id) {
      case 'edu-list':
        setEducationInfo([...educationInfo, newState]);
        break;
      case 'prac-list':
        setPracticalInfo([...practicalInfo, newState]);
        break;
      default:
        break;
    }
  }

  return (
    <main className='main-content'>
      <Form utility={
        {
          updateField,
          deleteList,
          updateList,
          createList,
        }
      }
      educationInfo={educationInfo}
      practicalInfo={practicalInfo}
      />
      <Preview 
        generalInfo={
          {
            firstName,
            lastName,
            title,
            age,
            email,
            contact,
            address,
          }
        }
        briefInfo={describeInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      /> 
    </main>
  )
}

export default Main;