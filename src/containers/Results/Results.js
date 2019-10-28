import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Banner } from '../../components/Banner';
import { ResultsLoaded } from './ResultsLoaded';
import sendAPIRequest from '../../utils/sendAPIRequest';
import STRINGS from '../../configs/Strings';

export class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResults: {
        loadState: 'LOADING'
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    sendAPIRequest(
      this.props.match.params.geocodedAddressLng,
      this.props.match.params.geocodedAddressLat,
      this.props.match.params.groupCode,
    ).then(
      (result) => {
        this.setState({
          queryResults: {
            loadState: 'OK',
            schoolsNearby: result.results.schools,
            updatedAt: result.results.wait_updated_at,
            waitListSize: result.results.wait,
          }
        });
      },
      (error) => {
        this.setState({
          queryResults: {
            loadState: 'ERROR',
            loadError: error,
          }
        })
      }
    )
  }

  renderInnerContent () {
    switch (this.state.queryResults.loadState) {
      case 'OK':
        return <ResultsLoaded
          address={this.props.match.params.geocodedAddress}
          groupCode={this.props.match.params.groupCode}
          schoolsNearby={this.state.queryResults.schoolsNearby}
          updatedAt={this.state.queryResults.updatedAt}
          waitListSize={this.state.queryResults.waitListSize}
        />
      case 'LOADING':
        return <Banner title={STRINGS.actions.loading_results} />
      case 'ERROR':
      default:
        return <Banner
          title={STRINGS.actions.loading_error}
          paragraphs={[this.state.queryResults.error]}
        />
    }
  }

  render () {
    return (
      <div>
        <BackButton />
        {this.renderInnerContent()}
      </div>
    );
  }
}
