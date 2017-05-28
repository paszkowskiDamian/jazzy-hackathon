import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

export class SearchBar extends Component {
    render() {
        const { name, location, tags, handleChange, tagsChange } = this.props;
        const inputTagsProps = {
            className: 'tags-input',
            placeholder: 'Add a tag'
        }
        return (
            <div className="search-bar">
                <div className="filter">
                    <label>Organizacja </label>
                    <input name="name" value={name} onChange={handleChange} />
                </div>
                <div className="filter">
                    <label>Lokalizacja </label>
                    <input name="location" value={location} onChange={handleChange} />
                </div>
                <div className="filter filter-tags">
                    <label>Tagi </label>
                    <TagsInput value={tags} onChange={tagsChange} maxTags={5} inputProps={{ disabled: tags.length === 5, ...inputTagsProps }} />
                </div>
            </div>
        );
    }
}
