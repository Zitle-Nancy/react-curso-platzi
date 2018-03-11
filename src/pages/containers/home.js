import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../category/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';

class Home extends Component {
	render(){
		return(
				<HomeLayout>
					<Related />
					<Categories categories = {this.props.data.categories} />
					<ModalContainer>
						<h1>Portales</h1>
					</ModalContainer>
				</HomeLayout>
			)
	}
}

export default Home;
