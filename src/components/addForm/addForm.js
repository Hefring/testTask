import React from 'react'
import styles from './addForm.css'

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    render() {
        return (
            <div className="addForm">
                <h3>Добавить новый объект</h3>
                <form onSubmit={this.submit}>
                    <label>Заголовок * <input ref="_title" type="text" required /></label>
                    <label>Добавить пункты(через запятую) <input ref="_attr" type="text"/></label>
                    <label>Описание <input ref="_description" type="text"/></label>
                    <button>Добавить</button>
                </form>
            </div>
        )
    }

    submit(event) {
        event.preventDefault();
        const {_title, _attr, _description} = this.refs;

        this.props.onNewArticle(_title.value, _attr.value.split(','), _description.value);

        _title.value = '';
        _attr.value = '';
        _description.value = '';
    }
}



export default AddForm