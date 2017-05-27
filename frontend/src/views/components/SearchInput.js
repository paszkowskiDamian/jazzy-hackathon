import React, { Component } from 'react';
import _ from 'lodash';
import { httpService } from '../../services/Http';

export class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
			events: [],
			organizations: [],
			projects: [],
		};

		this.inputChange = this.inputChange.bind(this);
	}

	componentWillMount() {
		const that = this;

		this.delayedCallback = _.debounce(function (event) {
			const inputVal = event.target.value;

			httpService.GET(`/search/${inputVal}`).then(response => {
				that.setState({
					...this.state,
					...response
				});
			})
		}, this.props.delay || 500);
	}

	inputChange(e) {
		e.persist();
		this.delayedCallback(e);
		this.setState({
			...this.state,
			inputVal: e.target.value,
		});
	}

    render() {
        return (
            <div className="search-input">
                <input onChange={this.inputChange} value={this.state.inputVal} />
                <i className="fa fa-search" />
							<div className='results-container'>
								{this.state.events.map((event, id) => (<div key={id}>
									<i className='fa fa-calendar' />
									<span>{event.name}</span>
								</div>))}
								{this.state.organizations.map((organization, id) => (<div key={id}>
									<i className='fa fa-users' />
									<span>{organization.name}</span>
								</div>))}
								{this.state.projects.map((project, id) => (<div key={id}>
									<i className='fa fa-cogs' />
									<span>{project.name}</span>
								</div>))}
								<div className='loader'>
									<img src='http://apdw.com/images/balls_loading.gif?x13037' alt='loading' />
								</div>
							</div>
            </div>
        );
    }
}
