import React, { Component } from 'react';
import _ from 'lodash';
import { httpService } from '../../services/Http';
import OverlayBlocker from './OverlayBlocker';

export class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
			events: [],
			organizations: [],
			projects: [],
			loading: false,
			active: false,
		};

		this.inputChange = this.inputChange.bind(this);
		this.changeSearch = this.changeSearch.bind(this);
	}

	componentWillMount() {
		const that = this;

		this.delayedCallback = _.debounce(function (event) {
			const inputVal = event.target.value;

			that.setState({
				...that.state,
				loading: true
			});
			httpService.GET(`/search/${inputVal}`).then(response => {
				that.setState({
					...that.state,
					...response,
					loading: false
				});
			})
		}, this.props.delay || 500);
	}

	checkIfResults() {
		return (this.state.projects.length || this.state.organizations.length || this.state.events.length);
	}

	inputChange(e) {
		e.persist();
		if(e.target.value.length >= 2) {
			this.delayedCallback(e);
		}
		this.setState({
			...this.state,
			inputVal: e.target.value,
		});
	}

	changeSearch(val) {
		this.setState({
			...this.state,
			active: val,
		})
	}

    render() {
        return (
            <div className="search-input">
							<div style={{display: this.state.active ? 'block' : 'none'}}>
								<OverlayBlocker zIndex={1} onClick={()=>this.changeSearch(false)} />
							</div>
                <input onFocus={() => this.changeSearch(true)} onChange={this.inputChange} value={this.state.inputVal} />
                <i className="fa fa-search" />
							<div style={{display: (this.state.active && this.checkIfResults() ) ? 'block' : 'none', zIndex: 4}} className='results-container'>
								<div style={{display: this.state.loading ? 'none' : 'initial'}} className='results'>
									{this.state.events.map((event, id) => (<a key={id} href={`/events/${event.id}`}>
										<div>
											<i className='fa fa-calendar' />
											<span>{event.name}</span>
										</div>
									</a>))}
									{this.state.organizations.map((organization, id) => (<a key={id} href={`/organizations/${organization.id}`}>
										<div>
											<i className='fa fa-users' />
											<span>{organization.name}</span>
										</div>
									</a>))}
									{this.state.projects.map((project, id) => (<a key={id} href={`/projects/${project.id}`}>
										<div>
											<i className='fa fa-cogs' />
											<span>{project.name}</span>
										</div>
									</a>))}
								</div>
								<div style={{display: this.state.loading ? 'flex' : 'none'}} className='loader'>
									<img src='http://apdw.com/images/balls_loading.gif?x13037' alt="search" />
								</div>
							</div>
            </div>
        );
    }
}
