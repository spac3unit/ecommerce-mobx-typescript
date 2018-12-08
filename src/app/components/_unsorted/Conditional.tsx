import * as React from 'react';
// https://greatrexpectations.com/tag/react/
type Props = {
  user: any;
  profile: any;
  otherData: any;
};
class MyComponent extends React.Component<Props, any> {
  render() {
    const { user, profile, otherData } = this.props;
    const shouldDisplayProfile = user && profile && otherData;
    return (
      <div>
        {user && <h1>{user.name}</h1>}
        {shouldDisplayProfile && <div>shouldDisplayProfileContent</div>}
        {/* other content */}
      </div>
    );
  }
}
