import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../category/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/container/handle-error';

class Home extends Component {
	state = {
		modalVisible: false,
	}
	handleOpenModal = () => {
		this.setState({
			modalVisible: true,
		})
	}
	handleCloseModalClck = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
		return(
				<HandleError>
					<HomeLayout>
						<Related />
						<Categories categories = {this.props.data}
						handleOpenModal={this.handleOpenModal}
						/>
						{this.state.modalVisible &&
							<ModalContainer>
								<Modal handleClick = {this.handleCloseModalClck}>
									<h1>Portales</h1>
								</Modal>
							</ModalContainer>
						}
					</HomeLayout>
				</HandleError>
			)
	}
}

export default Home;
