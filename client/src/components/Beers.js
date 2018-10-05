import React from 'react'
import axios from 'axios'
import {
	Header,
	Grid,
	Segment,
	Card,
} from 'semantic-ui-react'
import styled from 'styled-components'

const TallHeader = styled(Header)`
	color: white !important;
	margin-bottom: 10px !important;
`

const EvenCard = styled(Card)`
	height: 160px !important;
`

class Beers extends React.Component {
	state = { beers: [], breweries: [] }

	componentDidMount() {
		axios.get('/api/all_beers')
			.then( res => this.setState({ beers: res.data.entries }))

		axios.get('/api/all_breweries')
			.then( res => this.setState({ breweries: res.data.entries }))
	}

	render() {
		const { beers, breweries } = this.state

		return (
			<Grid centered container>
				<Grid.Column computer={7} tablet={16} mobile={16}>
					<Grid.Row>
						<TallHeader as="h1" textAlign="center">Beers</TallHeader>
					</Grid.Row>
					<Grid.Row>
						<Card.Group stackable itemsPerRow={2}>
							{ beers.map(beer =>
									<EvenCard key={beer.id} color="blue">
										<Card.Content>
											<Card.Header>
												{beer.name}
											</Card.Header>
										</Card.Content>
										{ beer.description &&
											<Card.Content>
												<Card.Description>
													{beer.description.length < 100 ? beer.description : `${beer.description.substr(0, 100)}...`}
												</Card.Description>
											</Card.Content>
										}
									</EvenCard>
							  )
							}
						</Card.Group>
					</Grid.Row>
				</Grid.Column>
				<Grid.Column computer={2}>

				</Grid.Column>
				<Grid.Column computer={7} tablet={16} mobile={16}>
					<Grid.Row>
						<TallHeader as="h1" textAlign="center">Breweries</TallHeader>
					</Grid.Row>
					<Grid.Row>
						<Card.Group stackable itemsPerRow={2}>
							{ breweries.map(brewery =>
									<EvenCard key={brewery.id} color="red">
										<Card.Content>
											<Card.Header>
												{brewery.name}
											</Card.Header>
										</Card.Content>
										{ brewery.description &&
											<Card.Content>
												<Card.Description>
													{brewery.description.length < 100 ? brewery.description : `${brewery.description.substr(0, 100)}...`}
												</Card.Description>
											</Card.Content>
										}
									</EvenCard>
							  )
							}
						</Card.Group>
					</Grid.Row>
				</Grid.Column>
			</Grid>
		)
	}
}

export default Beers
