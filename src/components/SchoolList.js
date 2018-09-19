import React from 'react';
import { DefaultButton } from 'components/DefaultButton';
import { School } from 'components/School';
import STRINGS from 'configs/Strings';
import { Link } from 'react-router-dom';

const shortenedListSize = 5;

export class SchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedListSize: props.shortenList
        ? Math.min(shortenedListSize, props.schools.length)
        : props.schools.length,
    };
    this.handleSeeMore = this.handleSeeMore.bind(this);
  }

  handleSeeMore() {
    this.setState({
      displayedListSize: this.props.schools.length,
    });
  }

  isListShortened() {
    return this.props.schools.length !== this.state.displayedListSize;
  }

  render() {
    return (
      <div className="school-list">
        {this.props.schools.slice(0,this.state.displayedListSize).map(
          (school,i) => <School
            school={school}
            groupCode={this.props.groupCode}
            key={`school_${i}`}
          />
        )}
        {this.isListShortened() ? <div className="row">
          <Link to="#">
            <DefaultButton
              title={STRINGS.actions.see_more}
              onClick={this.handleSeeMore}
            />
          </Link>
        </div> : null}
      </div>
    );
  }
};
