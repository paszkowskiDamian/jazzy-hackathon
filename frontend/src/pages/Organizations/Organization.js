import React, { Component } from 'react';
import { httpService } from '../../services/Http';
import _ from 'lodash';
import { Map } from '../../views/components/Map';

import { Navigation } from '../../views/Navigation/Navigation';

export class Organization extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			image: '',
			name: '',
			description: '',
			socialMedia: {
				fb: '',
				github: '',
				linkedin: '',
			},
			location: {
				long: 0,
				lat: 0,
			},
			users: [],
			projects: [],
		};
	}

	componentWillMount() {
		console.log('im in mount', _.get(this.props, 'match.params.id'));
		httpService.GET(`/organizations/${_.get(this.props, 'match.params.id')}`).then(result => {
			console.log('dupa ', result);

			this.setState({
				...this.state,
				image: _.get(result, 'logo'),
				name: _.get(result, 'name'),
				description: _.get(result, 'description'),
				socialMedia: {
					fb: _.get(result, 'socialMedia.fb'),
					github: _.get(result, 'socialMedia.github'),
					linkedin: _.get(result, 'socialMedia.linkedin'),
				},
				location: {
					long: _.get(result, 'location.geo[0]'),
					lat: _.get(result, 'location.geo[1]'),
				},
				users: _.get(result, 'users'),
				projects: _.get(result, 'projects'),
			})
		});
	}
	
	render() {
		const { loggedInUser } = this.props;
		return (
			<div className="organization-container">
				<Navigation loggedInUser={loggedInUser} />
				<div className="row center-xs">
					<div className="col-xs-10">
						<div className="organization-about">
							<div className="image-container">
								<img src={this.state.image} alt='organization' />
							</div>
							<div className="about-container">
								<div className='title-wrapper'>
									<h1>{this.state.name}</h1>
								</div>
								<div className="description-container">
									<div className="description" dangerouslySetInnerHTML={{__html: this.state.description}}></div>
									<div className='social-icons'>
										<div>
											<a href={this.state.socialMedia.fb}>
												<i className="fa fa-facebook" />
											</a>
										</div>
										<div>
											<a href={this.state.socialMedia.github}>
												<i className="fa fa-github" />
											</a>
										</div>
										<div>
											<a href={this.state.socialMedia.linkedin}>
												<i className="fa fa-linkedin" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="map-container">
								<Map/>
							</div>
						</div>
						<div className="projects-container">
							{this.state.projects.map((project, id) => (<div className="project" key={id}>
								<a href={`/projects/${project.id}`}>
									<div className="image" style={{backgroundImage: `url(${project.image})`}}></div>
								</a>
								<div className='description'>
									<h3>{project.name}</h3>
									<span>{project.shortDescription}</span>
								</div>
							</div>))}
						</div>
						<div className='members-container'>
							<h2>Członkowie</h2>
							<div className='members-wrapper'>
								{this.state.users.map((user, id) => (<div className='member' key={id}>
									<a href={`/users/${user.id}`}>
										<img src={user.avatar || 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg'} alt='organization' />
									</a>
									<span>{user.name}</span>
								</div>))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
