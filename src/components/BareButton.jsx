import React from "react";

export default class BareButton extends React.Component {
  constructor(props) {
    super(props);

    // trong class component chỉ có thể state trong hàm contructor
    this.state = {
      name: "Nemo",
    };
  }
  // currying sử dụng khi muốn truyền tham số trong onClick ví dụ: <button onClick={this.handleClick('add')}>Add</button>
  // handleClick = (value) => (event) => {
  //   console.log(value);
  // }
  // thay vì phải truyền thêm callback như thế này <button onClick={() => this.handleClick('Add')}>Add</button>
  // lúc này rút gọn được như sau: <button onClick={this.handleClick('add')}>Add</button>

  // khi muốn truyền cả tham số và lấy được cả event
  // trong onClick nhận vào là 1 callback (event) => this.handleClick(event, 'Add'). và callback này trả về hàm this.handleClick(event, 'Add')(hàm thực thi) lúc này khi render vẫn hiểu là nhận callback(event) => this.handleClick(event, 'Add') nên sẽ không thực thi hàm this.handleClick(event, 'Add') ngay mà chỉ khi click thì mới thực thi hàm this.handleClick(event, 'Add') lúc này event được lấy từ hàm callback bên ngoài và tham số truyền vào('Add') sẽ được log ra bình thường

  // <button onClick={(event) => this.handleClick(event, 'Add')}>Add</button>
  handleClick = (event, value) => {
    console.log(event, value);
  };

  componentDidMount() {
    console.log("didmount");
    console.log(this.state.name);
  }

  componentDidUpdate() {
    console.log("didmount");
    console.log(this.state.name);
  }

  componentWillUnmount() {
    console.log("didmount");
    console.log(this.state.name);
  }

  render() {
    console.log("render");
    console.log(this.state.name);
    return (
      <div className="btn_box">
        <button onClick={(event) => this.handleClick(event, "Add")}>Add</button>
        <button onClick={(event) => this.handleClick(event, "Edit")}>
          Edit
        </button>
        <button onClick={(event) => this.handleClick(event, "Delete")}>
          Delete
        </button>
      </div>
    );
  }
}
