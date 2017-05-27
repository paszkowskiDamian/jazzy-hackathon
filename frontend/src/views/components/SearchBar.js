import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

export class SearchBar extends Component {
    state = {
        name: '',
        location: '',
        tags: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    tagsChange = (tags) => {
        this.setState({ tags });
    }

    render() {
        const { name, location, tags } = this.state;
        const inputTagsProps = {
            className: 'tags-input',
            placeholder: 'Add a tag'
        }
        return (
            <div className="search-bar">
                <div className="filter">
                    <label>Nazwa </label>
                    <input name="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="filter">
                    <label>Lokalizacja </label>
                    <input name="location" value={location} onChange={this.handleChange} />
                </div>
                <div className="filter filter-tags">
                    <label>Tagi </label>
                    <TagsInput value={this.state.tags} onChange={this.tagsChange} maxTags={5} inputProps={{ disabled: tags.length === 5, ...inputTagsProps }} />
                </div>
            </div>
        );
    }
}
