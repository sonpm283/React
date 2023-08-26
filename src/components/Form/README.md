Nội quan trọng

các input có thể set thuộc tính value riêng input radio/checkbox thì set thuộc tính checked ex: checked={this.state.marriage}

vì vậy khi muốn lấy trạng thái checked thì cần phải lấy từ event.target.checked các input còn lại thì lấy từ event.target.value

trong controll componet form data được quản lý bởi React component:

được quản lý bởi state

this.state = {
    name: '',
    food: 'coconut',
    marriage: false,
    address: ''
}