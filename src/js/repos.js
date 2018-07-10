import React, { Component } from 'react';

class Repos extends Component{

	constructor(props){
		super(props);

		this.state = {
			repos:[]
		}

	}

	componentDidMount() {

		fetch('https://api.github.com/users/daya28/repos')

		.then((response) =>{

			return response.json()
		})

		.then((repositorios) => {

			console.log(repositorios)
			this.setState({
				repos: repositorios
				// aqui me guardara el arreglo con los repositorios de daya28, modifica el estado
			});
		});

	}

	render(){
		// hacer el render de lo que le pegue a la API

		return(
			<div>

				<div id="repositorio" className='repoCard'></div>
				<a id='projects' className='anchor'>#</a>

				<section id="projectsSection">
					<h3>Projects</h3>
					<h2>Proyectos en Git</h2>
						<ul className='repoItemStyle'>{this.state.repos.map(function (el){
							return<li>{el.name}<a href={el.html_url}>link</a></li>

						})}

						</ul>



				</section>

			</div>




			)
	}




}


export default Repos;