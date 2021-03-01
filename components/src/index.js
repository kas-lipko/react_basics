import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Sure thing
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Sam"
          timeAgo="Today at 3PM"
          content="Sweeet"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Jane"
          timeAgo="Yesterday"
          content="Nice post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Tom"
          timeAgo="Last Week"
          content="Awesome"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
