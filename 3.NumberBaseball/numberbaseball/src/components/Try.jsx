import React, { memo } from 'react';

/* class
class Try extends React.PureComponent {
  render() {
    const { tryInfo } = this.props;
    return (
      <div>
        <li>
          <div>{tryInfo.try}</div>
          <div>{tryInfo.result}</div>
        </li>
      </div>
    );
  }
}
*/

// hooks
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
})

export default Try;