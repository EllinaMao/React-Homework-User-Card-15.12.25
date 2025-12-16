/**
 * UserList - классовый компонент, который хранит state с массивом пользователей. Каждый пользователь - объект { id, name, age, avatar }.
 * Рендерит массив UserCard с помощью props.
 *  Добавляет форму для добавления нового пользователя (имя, возраст, выбор аватара).
 * При добавлении нового пользователя обновляет state и ререндерит список.
 */

import { Component } from "react";
import UserCard from "./UserCard";

import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";

import "../assets/css/UserList.css";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ id: 1, name: "Test User", age: 25, avatar: avatar1 }],
      name: "",
      age: "",
      avatar: avatar1,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAvatarChange = (event) => {
    const selectedAvatar = event.target.value === "avatar1" ? avatar1 : avatar2;
    this.setState({ avatar: selectedAvatar });
  };

  handleAddUser = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.age) return;

    const newUser = {
      id: Date.now(),
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      avatar: this.state.avatar,
    };

    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
      name: "",
      age: "",
      avatar: avatar1,
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddUser} className="user-input-form">
          <h3>Add New User</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name"
            required
            className="user-input-list"
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
            placeholder="Age"
            min="15"
            max="100"
            required
            className="user-input-list"
          />
          <select
            onChange={this.handleAvatarChange}
            value={this.state.avatar === avatar1 ? "avatar1" : "avatar2"}
            className="user-select-list"
          >
            <option value="avatar1">Avatar 1</option>
            <option value="avatar2">Avatar 2</option>
          </select>
          <button className="user-button-list" type="submit">
            Add User
          </button>
        </form>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.state.users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              age={user.age}
              avatar={user.avatar}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
